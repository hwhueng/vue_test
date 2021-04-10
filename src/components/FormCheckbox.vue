<template>
  <div>
    <el-form :inline="true"
        label-suffix=":" 
        :model="form"
        label-width="80px"
        ref="form">
        <el-form-item 
            label="名称" 
            prop="name"
            :rules="[{ required:true, trigger: 'blur', message: '名称是必填项' }]">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="选项">
            <el-switch v-model="form.item"></el-switch>
            <el-button :disabled="!form.item" type="primary" size="small"  @click="modelVisible=true">详细配置</el-button>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" size="small" @click="saveInfo">保存</el-button>
        </el-form-item>
    </el-form> 

    <el-dialog 
        title="详细配置"
        :visible.sync="modelVisible">
        <el-form ref="detailForm">
            <el-form-item>
                <el-checkbox label="personalInfo">个人信息</el-checkbox>
            </el-form-item>
            <el-form-item label="年龄">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="身高">
                <el-input></el-input>
            </el-form-item>              
            <el-form-item>
                <el-checkbox label="addressInfo">住址信息</el-checkbox>
            </el-form-item>
            <el-form-item label="省份">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="城市">
                <el-input></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">保存</el-button>
                <el-button type="primary">重置</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>  
  </div> 
</template>

<script>
export default {
  name: 'FormCheckbox',
    data () {
        return {
            form: {
                name: "",
                item: false
            },
            modelVisible: false
    }
  },
    methods: {
        saveInfo() {
            this.$refs['form'].validate((valid,failedInfo) => {
                if(valid){
                    // 提示用户
                    this.$message({
                        message: '保存成功',
                        type: "success",
                        center: true
                    });
                }else{
                    return false;
                }
            })
        }
    }
}
</script>