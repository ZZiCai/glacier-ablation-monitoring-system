<template>
  <div class="app-container">
    <div v-if="user">
      <el-row :gutter="20">

        <el-col :span="6" :xs="24">
          <user-card :user="user" />
        </el-col>

        <el-col :span="18" :xs="24">
          <el-card>
            <account :user="user" />
          </el-card>
        </el-col>

      </el-row>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import UserCard from './components/UserCard'
import Account from './components/Account'

export default {
  components: { UserCard, Account },
  data() {
    return {
      user: {}
    }
  },
  computed: {
    // ...mapGetters([
    //   'name',
    //   'avatar',
    //   'roles'
    // ])
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
