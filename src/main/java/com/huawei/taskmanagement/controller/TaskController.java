package com.huawei.taskmanagement.controller;

import com.huawei.taskmanagement.entity.Absent;
import org.activiti.engine.RepositoryService;
import org.activiti.engine.RuntimeService;
import org.activiti.engine.TaskService;
import org.activiti.engine.task.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/task")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @Autowired
    private RepositoryService repositoryService;

    @Autowired
    private RuntimeService runtimeService;

    /**
     * 启动一个请假流程
     *
     * @param processer
     * @return
     */
    @RequestMapping(value = "/start", method = RequestMethod.POST)
    public Object startTask(String processer) {
        String currentUser = SecurityContextHolder.getContext().getAuthentication().getName();
        Map<String, Object> variables = new HashMap<String, Object>();
        variables.put("processer", processer);
        variables.put("currentUser", currentUser);
        variables.put("sponsor", currentUser);
        Absent absent = new Absent("大家好");
        variables.put("absent", absent);
        runtimeService.startProcessInstanceByKey("absentId", variables);
        return "success";
    }

    /**
     * 获取当前用户的未完成的所有流程
     *
     * @return
     */
    @RequestMapping(value = "/tasks", method = RequestMethod.POST)
    public Object getOwnTasks() {
        String currentUser = SecurityContextHolder.getContext().getAuthentication().getName();
        List<Task> tasks = taskService.createTaskQuery().taskAssignee(currentUser).list();
        Map<String ,Object> results = new HashMap<String,Object>();


        List<Map<String, Object>> data = new ArrayList<Map<String, Object>>();
        results.put("data",data);
        if (tasks != null) {
            for (Task t : tasks) {
                Map<String, Object> variables = new HashMap<String, Object>();
                String id = t.getId();
                variables.put("processer", taskService.getVariable(id, "processer"));
                variables.put("currentUser", taskService.getVariable(id, "currentUser"));
                variables.put("sponsor", taskService.getVariable(id, "sponsor"));
                variables.put("id", id);
                variables.put("absent", taskService.getVariable(id, "absent"));
                data.add(variables);
            }
        }
        results.put("total",data.size());
        return results;
    }

    /**
     * 办理流程
     *
     * @param taskId    任务ID
     * @param processer 审批人
     * @return
     */
    @RequestMapping(value = "/process", method = RequestMethod.POST)
    public Object processTask(String taskId, String processer) {
        Map<String, Object> variables = new HashMap<String, Object>();
        variables.put("processer", processer);
        taskService.complete(taskId, variables);
        return "success";
    }
}
