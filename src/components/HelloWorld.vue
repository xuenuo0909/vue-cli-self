<template>
  <div>
    你好！世界！
    <page-link :routeList="routeList"></page-link>
      <router-view></router-view>
  </div>
</template>

<script>
import pageLink from './src/pageLink';
export default {
  components: {
    pageLink
  },
  data() {
    return {
      routeList: [
        {
          title: '路由操作',
          links: [
            {
              url: '/demo1',
              caption: 'demo1'
            },
            {
              url: '/demo2',
              caption: 'demo2'
            }
          ]
        },
        {
          title: '你好！世界！',
          links: [
            {
              url: '/hello',
              caption: '你好！'
            }
          ]
        },
        {
          title: 'sasdadas',
          links: [
            {
              url: '/page',
              caption: '你好！'
            }
          ]
        },
        {
          title: '修改密码',
          links: [
            {
              url: '/modifymm',
              caption: '你好！'
            }
          ]
        },
        {
          title: '划转学生',
          links: [
            {
              url: '/huahzhuan',
              caption: '划转'
            }
          ]
        },
        {
          title: '适用老师',
          links: [
            {
              url: '/shiyong',
              caption: '适用'
            }
          ]
        },
      ]
    };
  }
};
</script>
