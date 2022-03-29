<!-- 创建分类 -->
<template>
  <div class="about">
    <h1>{{id ? '修改' : '创建'}}分类</h1>
    <el-form label-width="100px" :form="model" @submit.native.prevent="onSave">
      <el-form-item label="上级分类">
        <el-select v-model="model.parent">
          <el-option v-for="item in parents" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'CreateCate',
  props: {
    id: {}
  },
  data () {
    return {
      model: {},
      parents: []
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created () {
    this.fetchParent()
    this.id && this.fetch()
  },
  //生命周期 - 挂载完成（访问DOM元素）
  methods: {
    async onSave () {
      let res
      if (this.id) {
        res = await this.$http.put(`rest/categories/${this.id}`, this.model)
      }
      else {
        res = await this.$http.post('rest/categories', this.model)
      }
      console.log(res)
      this.$router.push('/categories/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch () {
      const res = await this.$http.get(`rest/categories/${this.id}`)
      this.model = res.data
    },
    async fetchParent () {
      const res = await this.$http.get('rest/categories')
      this.parents = res.data
    }
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>