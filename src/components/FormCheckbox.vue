<template>
  <div>
    <el-form 
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
            <el-button :disabled="!form.item" type="primary" size="small">详细配置</el-button>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" size="small" @click="saveInfo">保存</el-button>
        </el-form-item>
    </el-form>
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
        }
    }
  },
  methods: {
    saveInfo() {
        this.$refs['form'].validate((valid,failedInfo) => {
            console.log(failedInfo);
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