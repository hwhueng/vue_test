<template>
    <div>
        <el-form>
            <el-form-item>
                <el-row class="adatar">
                    <img v-bind:src="adatar?adatar:require('../assets/images/user.png')" alt="">
                </el-row>
            </el-form-item>
            <el-form-item label="姓名">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="身高">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="地区">
                <el-input></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'adatar',
    data() {
        return {
            adatar: ''
        }
    },
    
}
</script>

<style lang='scss'>

.adatar{
    display: flex;
    align-items: center;
    // padding-bottom: 20px;
    // margin-bottom: 20px;
    // border-bottom: 1px solid #ccc;
    img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    // margin-right: 40px;
    }
}

</style>