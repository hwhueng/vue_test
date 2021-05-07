<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">
      <el-dropdown>
        <el-button type="primary">
          更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown split-button type="primary" @click="handleClick">
        更多菜单
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-tab-pane>
    <el-tab-pane label="配置管理" name="second">
      <el-steps :active="1">
        <el-step title="步骤 1" icon="el-icon-edit"></el-step>
        <el-step title="步骤 2" icon="el-icon-upload"></el-step>
        <el-step title="步骤 3" icon="el-icon-picture"></el-step>
      </el-steps>
    </el-tab-pane>
    <el-tab-pane label="角色管理" name="third">
      <div style="height: 300px">
        <el-steps direction="vertical" :active="1">
          <el-step title="步骤 1"></el-step>
          <el-step title="步骤 2"></el-step>
          <el-step
            title="步骤 3"
            description="这是一段很长很长很长的描述性文字"
          ></el-step>
        </el-steps>
      </div>
    </el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">
        <NumberValidateForm></NumberValidateForm>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import NumberValidateForm from '@/components/NumberValidateForm.vue'
export default {
    components:{
        NumberValidateForm
    },
  data() {
    return {
      activeName: "second",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>