<template>
  <div>
    <div class="forms-box">
      <el-form :inline="true" :model="form">
        <el-form-item label="员工姓名">
          <el-input placeholder="员工姓名" v-model="form.empName"></el-input>
        </el-form-item>
        <el-form-item label="部门">  
          <el-input placeholder="部门" v-model="form.orgId"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button size="mini" type="primary">查询</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div>
    <el-table :data="tableData" v-loading="loading" style="width: 100%" border
    :header-cell-style="{background:'#666',color:'#ffff'}"
    >
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="modelId" label="模型ID" width="180"></el-table-column>
        <el-table-column prop="deployId" label="部署Id" width="180"></el-table-column>
        <el-table-column prop="processDefKey" label="流程类别" width="180"></el-table-column>
        <el-table-column prop="name" label="模型名称" width="180"></el-table-column>
        <el-table-column prop="ver" label="版本"></el-table-column>
        <el-table-column prop="createTime" label="创建时间"></el-table-column>
        <el-table-column prop="updateTime" label="更新时间"></el-table-column>
        <el-table-column prop="opt" label="操作" width="180">
            <template slot-scope="scope">
                <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                 <el-button size="mini" type="danger" @click="deleteModel(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'BasicContainer',
    curPage: 1,
    pageSize: 10,
    data() {
      return {
        inputSome: '',
        dialogVisible: false,
        form:{
          empName: "text",
          orgId: "val"
        },
        tableData:[
            ]
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  .forms-box {
    display: -ms-inline-flexbox;
    padding: 25px 30px 25px 10px;
  }
</style>