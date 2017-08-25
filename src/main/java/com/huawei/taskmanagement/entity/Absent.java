package com.huawei.taskmanagement.entity;

import java.io.Serializable;

public class Absent implements Serializable {
    private String id;
    private String name;

    public Absent() {

    }

    public Absent(String name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
