<!-- 分类列表 -->
<template>
  <div>
    <h1>物品列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="240"></el-table-column>
      <!-- <el-table-column prop="parent.name" label="上级分类"></el-table-column> -->
      <el-table-column prop="name" label="物品名称"></el-table-column>
      <el-table-column prop="icon" label="物品图标">
        <template slot-scope="scope">
          <img :src="scope.row.icon" style="height: 3em" />
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/items/edit/${scope.row._id}`)"
          >编辑</el-button>
          <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  data () {
    return {
      items: []
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created () {
    this.fetch()
  },
  //生命周期 - 挂载完成（访问DOM元素）
  methods: {
    async fetch () {
      const res = await this.$http.get("rest/items");
      this.items = res.data;
    },
    remove (row) {
      this.$confirm(`是否确定要删除物品 "${row.name}"`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        await this.$http.delete(`rest/items/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        this.fetch();
      });
    }
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>