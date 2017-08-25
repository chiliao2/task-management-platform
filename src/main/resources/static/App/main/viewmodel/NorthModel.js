Ext.define('App.main.viewmodel.NorthModel', {
    extend : 'Ext.app.ViewModel',
    alias : 'viewmodel.north_model',
    data : {
        user : {
            name : '加载中...',
            version : {
                name : '加载中...'
            },
            baseline : {
                name : '加载中...'
            }
        },
        menus : [{
                    name : "<img src='resources/icons/project800-600.png' /><br/>项目管理",
                    menus : [{
		                        name : '我的项目',
		                        iconCls : 'menu_item_play_managument',
		                        clazz : 'App.project.view.MyProjectList'
		                    },{
                                name : '所有项目',
                                iconCls : 'menu_item_play_managument',
                                clazz : 'App.project.view.ProjectList'
                            }]
                }, {
                    name : "<img src='resources/icons/testDesign800-600.png' /><br/>用例管理",
                    menus : [{
                                name : '基线用例管理',
                                iconCls : 'menu_item_play_managument',
                                clazz : 'App.usecasemanagement.view.UseCaseManagement'
                            }]
                }, {
                    name : "<img src='resources/icons/testRun800-600.png' /><br/>执行管理",
                    menus : [{
                                name : '序列管理',
                                iconCls : 'menu_item_play_managument',
                                clazz : 'App.executemanagement.view.SequenceManagement'
                            }, {
                                name : '执行监控',
                                iconCls : 'menu_item_play_managument',
                                clazz : 'App.executionmonitor.view.ExecutionMonitor'
                            },{
                            	 name : '执行机管理',
                                 iconCls : 'menu_item_play_managument',
                                 clazz : 'App.environment.view.EnvironmentManagement'
                            }]
                }, {
                    name : "<img src='resources/icons/dataManager800-600.png' /><br/>报表中心",
                    menus : [{
                        name : 'RF度量',
                        iconCls : 'menu_item_play_managument',
                        clazz : 'App.operatelog.view.OperateLogList'
                    },{
                        name : '版本度量',
                        iconCls : 'menu_item_play_managument',
                        clazz : 'App.operatelog.view.OperateLogList'
                    },{
                        name : '数据查看',
                        iconCls : 'menu_item_play_managument',
                        clazz : 'App.operatelog.view.OperateLogList'
                    },{
                        name : '报告查看',
                        iconCls : 'menu_item_play_managument',
                        clazz : 'App.operatelog.view.OperateLogList'
                    }]
                }, {
                    name : "<img src='resources/icons/set800-600.png' /><br/>系统配置",
                    menus : [{
	                        name : '操作日志',
	                        iconCls : 'menu_item_play_managument',
	                        clazz : 'App.operatelog.view.OperateLogList'
	                    },{
	                    	name : '用户配置',
	                    	iconCls:'menu_item_authorization',
	                    	menus:[{
	                            name : '用户管理',
	                            clazz : 'App.authorization.user.view.UserList',
	                            iconCls : 'menu_item_user_managument'
	                        }, {
	                            name : '分组管理',
	                            clazz : 'App.authorization.usergroup.view.UserGroupTree',
	                            iconCls : 'menu_config_group'
	                        }, {
	                            name : '区域管理',
	                            clazz : 'App.authorization.area.view.AreaList',
	                            iconCls : 'menu_item_resource_managument'
	                        }, {
	                            name : '角色管理',
	                            clazz : 'App.authorization.role.view.RoleList',
	                            iconCls : 'menu_item_role_managument'
	                        },{
	                        	name: '资源管理',
	                        	clazz:"App.authorization.resource.view.ResourceTree",
	                        	iconCls:'menu_item_resource_managument'
	                        }]
	                    }]
                }]
    }
})