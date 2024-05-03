<template>
  <div class="app-container">
    <el-card>
      <el-tabs v-model="activeTab">
        <!-- 冰川数据 -->
        <el-tab-pane label="单条数据录入" name="glacier">
          <h3>上传冰川数据</h3>

          <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="冰川ID">
              <el-input-number v-model="form.glacierID" :min="0" :max="999999" :controls="false" />
            </el-form-item>
            <el-form-item label="机构ID">
              <el-input-number v-model="form.institutionID" :min="0" :max="999999" :controls="false" />
            </el-form-item>
            <el-form-item label="温度">
              <el-col :span="4">
                <el-input-number v-model="form.temperature" :precision="2" :step="0.1" :min="-50" :max="10" controls-position="right" />
              </el-col>
              <el-col :span="1">℃</el-col>
            </el-form-item>
            <el-form-item label="盐度">
              <el-col :span="4">
                <el-input-number v-model="form.salinity" :precision="2" :step="0.1" :min="0" :max="40" controls-position="right" />
              </el-col>
              <el-col :span="1">%</el-col>
            </el-form-item>
            <el-form-item label="面积">
              <el-col :span="4">
                <el-input-number v-model="form.area" :precision="2" :step="0.1" :min="0" :max="999999" controls-position="right" />
              </el-col>
              <el-col :span="1">km²</el-col>
            </el-form-item>
            <el-form-item label="观测时间">
              <el-date-picker v-model="form.obsTime" type="date" placeholder="Pick a date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" />
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="onSubmit">提交</el-button>
              <el-button @click="onCancel">取消</el-button>
            </el-form-item>
          </el-form>

        </el-tab-pane>

        <el-tab-pane label="文件录入" name="upload">
          <h3>上传冰川数据</h3>
          <el-upload class="upload-demo" drag action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" limit="1">
            <!-- <el-icon class="el-icon--upload"><upload-filled /></el-icon> -->
            <i class="el-icon-upload" />
            <div class="el-upload__text">
              Drop file here or <em>click to upload</em>
            </div>
            <template #tip>
              <div class="el-upload__tip">
                json file with a size less than 10MB
              </div>
            </template>
          </el-upload>

        </el-tab-pane>
        <!-- 审核数据 -->
        <el-tab-pane label="审核数据" name="audit">
          <h2>审核上传数据</h2>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column fixed prop="name" label="名称" width="150" />
            <el-table-column prop="obsTime" label="观测时间" width="120" />
            <el-table-column prop="institutionID" label="机构ID" width="120" />
            <el-table-column prop="temperature" label="温度" width="120" />
            <el-table-column prop="salinity" label="盐度" width="120" />
            <el-table-column prop="area" label="面积" width="600" />

            <el-table-column fixed="right" label="审核操作" width="150">
              <template #default>
                <el-button type="success" icon="el-icon-check" circle />
                <el-button type="danger" icon="el-icon-delete" circle />
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>

const tableData = [
  {
    name: '玉龙雪山',
    obsTime: '2016-05-01',
    institutionID: 10086,
    temperature: '0.12',
    salinity: '3.1%',
    area: '0.12km²'
  },
  {
    name: '玉龙雪山',
    obsTime: '2016-06-01',
    institutionID: 10086,
    temperature: '0.11',
    salinity: '3.3%',
    area: '0.12km²'
  },
  {
    name: '玉龙雪山',
    obsTime: '2016-07-01',
    institutionID: 10086,
    temperature: '0.20',
    salinity: '3.2%',
    area: '0.12km²'
  },
  {
    name: '玉龙雪山',
    obsTime: '2016-08-01',
    institutionID: 10086,
    temperature: '0.15',
    salinity: '3.1%',
    area: '0.12km²'
  }
]
export default {
  data() {
    return {
      activeTab: 'glacier',
      form: {
        glacierID: 0,
        institutionID: 0,
        temperature: 0.00,
        salinity: 0.00,
        area: 0.00,
        obsTime: ''
      },
      tableData: tableData
    }
  },
  methods: {
    onSubmit() {
      var data = 'submit!' + JSON.stringify(this.form)
      this.$message(data)
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line {
  text-align: center;
}
</style>
