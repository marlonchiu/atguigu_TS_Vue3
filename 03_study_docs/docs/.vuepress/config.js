module.exports = {
  base: '/vue3_study_docs/' /* 基础虚拟路径 */,
  dest: 'docs/dist' /* 打包文件基础路径, 在命令所在目录下 */,
  title: 'Vue3+TS 快速上手', // 标题
  description: '尚硅谷前端研究院', // 标题下的描述
  themeConfig: {
    // 主题配置
    logo: '/images/logo.png',
    nav: [
      { text: '官网', link: 'http://www.atguigu.com' },
      { text: '谷粒学院', link: 'http://www.gulixueyuan.com/' },
      {
        text: '学习路线',
        items: [
          { text: '前端', link: 'http://www.atguigu.com/web/' },
          { text: 'Java', link: 'http://www.atguigu.com/kecheng.shtml' },
          { text: '大数据', link: 'http://www.atguigu.com/bigdata/' }
        ]
      },
      { text: '全套视频资料', link: 'http://www.gulixueyuan.com/' }
    ],
    sidebar: [
      // 左侧导航
      '00_课程介绍',
      {
        title: '一.TypeScript快速上手',
        collapsable: false,
        children: [
          {
            title: '初识 TypeScript', // 标题
            children: [
              // 下级列表
              'chapter1/01_初识TS',
              'chapter1/02_安装TS',
              'chapter1/03_HelloWorld',
              'chapter1/04_webpack打包'
            ]
          },
          {
            title: 'TypeScript 常用语法',
            children: ['chapter2/1_type', 'chapter2/2_interface', 'chapter2/3_class', 'chapter2/4_function', 'chapter2/5_generic', 'chapter2/6_other']
          }
        ]
      },

      {
        title: '二.Vue3快速上手',
        collapsable: false,
        children: ['chapter3/01_认识Vue3', 'chapter3/02_创建vue3项目']
      },
      {
        title: '三.Composition API',
        collapsable: false,
        children: [
          'chapter4/01_Composition API_常用部分',
          'chapter4/02_Composition API_其它部分',
          'chapter4/03_手写组合API',
          'chapter4/04_Composition VS Option'
        ]
      },
      {
        title: '四.其它新组合和API',
        collapsable: false,
        children: ['chapter5/01_新组件', 'chapter5/02_其他新API']
      },
      {
        title: '五.Vue3综合案例',
        collapsable: false,
        children: ['chapter6/']
      },
      'chapter7/快速搭建在线文档'
    ]
  },

  head: [['link', { rel: 'shortcut icon', type: 'image/x-icon', href: `./images/favicon.ico` }]]
}
