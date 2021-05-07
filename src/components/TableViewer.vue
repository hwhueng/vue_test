<template>
<el-main>
    <el-form>
            <el-form-item>
                <el-button size="mini" type="primary">新增</el-button>
                 <el-button size="mini" type="primary">导入</el-button>
            </el-form-item>
    </el-form>
    <el-table :data="tableData" v-loading="loading" style="width: 100%" border
    :header-cell-style="{background:'#eef1f6',color:'#606266'}"
    >
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="modelId" label="模型ID" width="180"></el-table-column>
        <el-table-column prop="deployId" label="部署Id" width="180"></el-table-column>
        <el-table-column prop="processDefKey" label="流程类别" width="180"></el-table-column>
        <el-table-column prop="name" label="模型名称" width="180"></el-table-column>
        <el-table-column prop="ver" label="版本" width="180"></el-table-column>
        <el-table-column prop="createTime" label="创建时间"></el-table-column>
        <el-table-column prop="updateTime" label="更新时间"></el-table-column>
        <el-table-column :inline="true" prop="opt" label="操作">
            <template slot-scope="scope">
                <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                 <el-button size="mini" type="danger" @click="deleteModel(scope.$index, scope.row)">删除</el-button>
                 <el-button size="mini" type="warning" @click="deployModel(scope.$index, scope.row)">部署</el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-pagination
      background      
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="curPage"
      :page-sizes="[5,10,15]"
      :page-size="pagesize"
      layout="total,jumper,prev, pager, next,sizes"
      :total="total"
    ></el-pagination>
</el-main>
</template>

<script>
import axios from 'axios';


export default {
    name: 'TableViewer',
    curPage: 1,
    pageSize: 10,
    data(){
        return {
            total: 0,
            pageSize: 10,
            curPage: 1,
            loading: true,
            baseUrl: "http://localhost:18082",
            headers: {headers: {'Content-Type': 'application/json;charset=utf-8'}},
            tableData:[
            ]
        
        }
    },
    mounted(){
        // this.fetch(this.curPage, this.pageSize);
    },
    created(){
        // console.log("fecthdata: ")

        this.fetch();
    },
    methods:{
        fetch(curPage, pageSize){
        axios.post(
                this.baseUrl + "/act/modelList",
                {"curPage": curPage, "pageSize": pageSize},
                this.headers
            ).then(res=>{
                var data = [];
                var resData = res.data.data;
                for(let i=0; i<resData.length; i++){
                var obj = {};
                obj.modelId = resData[i].mId;
                obj.deployId = resData[i].deploymentId;
                obj.processDefKey = resData[i].category;
                obj.name = resData[i].name;
                obj.createTime = resData[i].createTime;
                obj.updateTime = resData[i].lastUpdateTime;
                obj.ver = resData[i].rev;
                data[i] = obj;
            }
            this.tableData = data;
            this.total = res.data.count;
            console.log("totoal:" + this.total);
            this.loading=false;
            }).catch(err=>{
                //console.log(this.baseUrl + "/act/modelList");
                console.log(err.msg || "错误")
            })
        },
        handleEdit(index, row){
            var url = this.baseUrl + "/modeler.html?modelId=";
            window.open(url + row.modelId);
        },
        handleSizeChange(size){
            this.fetch(this.curPage, size);
            this.pageSize = size;
        },
        handleCurrentChange(curPage){
            this.fetch(curPage, this.pageSize);
            this.curPage = curPage;
        },
        deleteModel(index, row){
            var url = this.baseUrl + "/model/delete/";
            this.$confirm("是否删除该模型?", "警告", {
                confirmButtonText: "确定",
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() =>{
            axios.post(url + row.modelId, this.headers)
            .then(res =>{
                this.$message({
                    showClose: true,
                    message: res.data.data || "删除成功",
                    type: "success"
                });
                this.fetch(this.curPage, this.pageSize);
            }).catch(err=>{
                this.$message({
                    
                    showClose: true,
                    message: err || "错误",
                    type: "error"
                    });
            })
            })
        },
        deployModel(index, row){
            var url = this.baseUrl + "/model/deploy";
            var params = {
                modelId: row.modelId
            }
            axios.post(url, params)
            .then(res=>{
                this.$message({
                    showClose: true,
                    message: res.data.data || "成功",
                    type: "success"
                });
                this.fetch(this.curPage, this.pageSize);
            }).catch(err=>{
                this.$message({
                    showClose: true,
                    message: err || "错误",
                    type: "error"
                });
            })
        }

    }
}
</script>