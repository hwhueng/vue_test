/**
 搜索用户组件
 */
<template>
  <el-select
    v-model="value1"
    multiple
    filterable
    remote
    reserve-keyword
    collapse-tags
    placeholder="请输入员工姓名"
    :remote-method="searchUser"
    :value-key="empName"
    :loading="loading">
            <el-option
            v-for="item in options"
            :key="item.empId"
            :label="item.empName"
            :value="item.empId">
                <span style="float: left">{{ item.empName }}({{item.empId}})</span>
                <span style=" color: #8492a6; ">{{ item.deptName }}</span>
            </el-option>
    </el-select>
</template>

<script>
import axios from 'axios';
let timeout;//防抖时间参数
export default {
    props:{
        value:{
            type: [String,Number,Array],
			default: []
        },
        placeholder:{
            type:String,
            default: "员工姓名"
        },
		value_key:{
			type:String,
			default: "value"
		},
        // 默认加载用户列表
        defaultOptions:{
            type:Array,
            default:()=>[]
        },
        // 是否搜索权限下的用户
        auth:{
            type: Boolean,
            default: false
        },
        // 是否限制下拉高度
        limitHeight:{
            type: Boolean,
            default: false
        },
        // 尺寸
        size:{
            type: String,
            default: "small"
        },
		// 多选
		multiple:{
            type: Boolean,
            default: true
        },
        popperAppendToBody:{
            type: Boolean,
            default: false
        },
        // 是否禁用
        disabled:{
            type: Boolean,
            default: false
        }
    },
    data(){
        return {
            options:[],
            loading: false,
            baseUrl: "http://localhost:18082",
            value1: []
        }
    },
    methods:{
        searchUser(e){
            if(e==='') {
                this.options = this.defaultOptions || [];
                return
            };
            this.loading = true;
            //防抖
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(() => {
                this.get_value(e);
            }, 500);
        },
        get_value(e){
          axios.post(this.baseUrl + '/user/listByName/' + e)
          .then(res=>{
              this.options = res.data.data||[];
              this.loading = false;
          })
          .catch(res=>{
              this.loading = false;
          })
        },
        changeValue(e){
            let arr = this.options.filter(item=>item.empId === e);
            this.$emit("input",e,arr[0]);
            this.$emit('change',arr[0]);
        },
        clear(){
            this.options = this.defaultOptions || [];
        }
    },
    watch:{
        defaultOptions:{
            immediate: true,
            handler(val){
                this.options = val;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .search-user{
        width: 100%;
		cursor: pointer;
		::v-deep {
			input{
				cursor: pointer;
			}
			.el-select-dropdown.is-multiple{
				.el-select-dropdown__item{
					padding-right: 30px;
				}
			}
			.el-select-dropdown.is-multiple .el-select-dropdown__item.selected::after{
				right: 13px;
			}
		}
    }
    ::v-deep {
        .el-select-dropdown__item{
            display: flex;
            justify-content: space-between;
        }
    }
</style>
