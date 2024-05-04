<template>

  <el-form ref="form" :model="form" label-width="120px">
    <el-form-item label="机构ID">
      <el-input-number v-model="form.institutionID" :min="0" :max="999999" :controls="false" @change="searchIns" />
    </el-form-item>
    <el-form-item label="机构名称">
      {{ form.institutionName }}
    </el-form-item>
    <el-form-item label="申请理由">
      <el-input v-model="form.reason" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
      <el-button @click="onCancel">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        institutionID: 0,
        institutionName: '没有此机构',
        reason: ''
      },
      institutions: [
        {
          id: 10,
          name: '同济大学'
        },
        {
          id: 20,
          name: '海洋研究院'
        }
      ]
    }
  },
  methods: {
    searchIns(id) {
      console.log('id', id)
      var x = this.institutions.find(ins => ins.id === id)
      if (!x) {
        this.form.institutionName = '没有此机构'
      } else {
        this.form.institutionName = x.name
      }
    },
    clearForm() {
      this.form = {
        institutionID: 0,
        institutionName: '没有此机构',
        reason: ''
      }
    },
    onSubmit() {
      if (this.form.institutionName === '没有此机构') {
        this.$message({
          message: '没有此机构',
          type: 'error'
        })
      } else {
        this.$message({
          message: '提交成功！',
          type: 'success'
        })
      }
      this.clearForm()
    },
    onCancel() {
      this.$message({
        message: '取消!',
        type: 'warning'
      })
      this.clearForm()
    }
  }
}
</script>
