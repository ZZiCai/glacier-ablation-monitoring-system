<template>
  <div class="app-container">
    <div v-if="user">
      <el-row :gutter="20">

        <el-col :span="6" :xs="24">
          <user-card :user="user" />
        </el-col>

        <el-col :span="18" :xs="24">
          <el-card>
            <el-tabs v-model="activeTab">
              <el-tab-pane label="申请加入机构" name="apply">
                <apply />
              </el-tab-pane>
              <el-tab-pane label="审核通过" name="audit">
                <audit :data="tableData" />
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import UserCard from './components/UserCard'
import Apply from './components/Apply.vue'
import Audit from './components/Audit.vue'
const tableData = [
  {
    userName: 'zzh',
    userID: 2152432,
    institutionName: '同济大学',
    institutionID: 10,
    reason: '想加入同济大学'
  },
  {
    userName: 'hjh',
    userID: 2153067,
    institutionName: '同济大学',
    institutionID: 10,
    reason: '我是同济大学的学生'
  },
  {
    userName: 'yyz',
    userID: 2152413,
    institutionName: '同济大学',
    institutionID: 10,
    reason: '我对冰川消融信息感兴趣'
  }
]

export default {
  components: { UserCard, Apply, Audit },
  data() {
    return {
      user: {},
      activeTab: 'apply',
      tableData: tableData
    }
  },
  created() {
    this.getUser()
  },
  methods: {
    getUser() {
      this.user = {
        name: 'zcZhou',
        role: 'admin',
        email: 'admin@test.com',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        institutions: [
          {
            id: 1,
            name: '同济大学'
          },
          {
            id: 2,
            name: '海洋研究院'
          }
        ]
      }
    }
  }
}
</script>
