<template>
<div>
    <el-input
     placeholder="请输入部门"
     v-model="filterText"
    ></el-input>
<el-tree
  class="filter-tree"
  :data="data"
  show-checkbox
  node-key="id"
  ref="tree"
  highlight-current
  @check-change="getCheckedNodes"
  :filter-node-method="filterNode"
  :props="defaultProps">
</el-tree>
</div>
</template>

<script>
import axios from 'axios';

export default {
    watch:{
        filterText(val){
            this.$refs.tree.filter(val);
        }
    },
    methods:{
        filterNode(value, data){
            if(!value) return true;
            return data.deptName.indexOf(value) !== -1;
        },
        fetchTree(){
            axios.post(this.baseUrl + "/org/tree")
            .then(res=>{
                this.data = res.data.data;
            }).catch(err=>{
                console.log(err.msg || "错误")
            })
        },
        getCheckedNodes(){
            let res = this.$refs.tree.getCheckedNodes()
            this.selectDept.clear();
            res.forEach((item)=>{
                this.selectDept.add(item.deptId);
            });
            console.log("depts:" + this.selectDept.toString());
        }
    },

    data(){
        return {
            baseUrl: "http://localhost:18082",
            filterText: '',
            data: [],
            defaultProps:{
                children: 'childrenList',
                label: 'deptName',
                id: 'deptId'
            },
            selectDept: new Set()
        }
    },
    created(){
        // console.log("fecthdata: ")

        this.fetchTree();
    },
}
</script>