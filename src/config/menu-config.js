const base = 'Home'

export default [{
  name: 'basic',
  meta: {
    title: '基本',
    icon: 'fa fa-camera-retro'
  },
  sub: [{
    name: 'BasicLayout',
    meta: {
      index: `/Home/BasicLayout`,
      title: '基本布局',
      type: 'menu',
      active: false
    }
  }, {
    name: 'BasicContainer',
    meta: {
      index: `/Home/BasicContainer`,
      title: '基本容器',
      type: 'menu',
      active: false
    }
  }]
}, {
  name: 'Form',
  meta: {
    title: '表单',
    icon: 'fa fa-bandcamp'
  },
  sub: [{
    name: 'FormRadio',
    meta: {
      index: `/Home/FormRadio`,
      title: '单选按钮',
      type: 'menu',
      active: false
    }
  },
  {
    name: 'TableViewer',
    meta: {
      index: `/Home/TableViewer`,
      title: '表格',
      type: 'menu',
      active: false
    }
  },
  {
    name: 'Tabs',
    meta: {
      index: `/Home/Tabs`,
      title: '标签',
      type: 'menu',
      active: false
    }
  },
  {
    name: 'FormCheckbox',
    meta: {
      index: `/Home/FormCheckbox`,
      title: '切换按钮',
      type: 'menu',
      active: false
    }
  },
  {
    name: 'PersonalDetail',
    meta: {
      index: `/Home/PersonalDetail`,
      title: '弹窗',
      type: 'menu',
      active: false
    }
  },
  {
    name: 'SearchEmpByName',
    meta: {
      index: `/Home/SearchEmpByName`,
      title: '名字搜索',
      type: 'menu',
      active: false
    }
  },
  {
    name: 'OrgTree',
    meta: {
      index: `/Home/OrgTree`,
      title: '部门树',
      type: 'menu',
      active: false
    }
  }
]
}]