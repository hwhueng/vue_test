<template>
  <div>
        <el-form ref="form" :model="form" label-width="80px" :rules="addFormRules" status-icon=true>
            <el-form-item label="活动名称" :rules="[{required: true,trigger: 'blur',message: '请输入活动名称'}]">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="活动时间">
                <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="即时配送">
                <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="活动性质">
                <el-checkbox-group v-model="form.type">
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源">
                <el-radio-group v-model="form.resource">
                <el-radio label="线上品牌商赞助"></el-radio>
                <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="活动形式">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
  </div>
</template>

<script>
export default {
  name: 'FormRadio',
  data () {
    return {
        message: "Element Form表单实践",
        statusIcon: true,
        form: {
            name: '我是初始化设置的活动名称',   // 活动名称
            region: 'beijing', // 活动区域
            date1: new Date(),  // 活动时间-日期
            date2: new Date(),  // 活动时间-时间
            delivery: true,  // 即时配送
            type: ['单纯品牌曝光'],         // 活动性质
            resource: '线上品牌商赞助',     // 特殊资源
            desc: '我是初始化设置的活动形式'          // 活动形式
        },
        addFormRules: {
            name: [{
                required: true,            // name字段是否必填,true:必填 false:非必填
                trigger: 'blur',    // 在什么时候触发验证,blur:在元素失去焦点的时候验证规则
                message: "请输入活动名称",  // 如果没有填写时的错误提示语
            },{
                min: 5,         // 字段最小长度
                max: 10,        // 字段最大长度
                trigger: 'blur',    // 在什么时候触发验证,blur:在元素失去焦点的时候验证规则
                message: "活动名称长度在5-10个字符",    // 不满足规则时显示的错误提示语
            }]
        }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>