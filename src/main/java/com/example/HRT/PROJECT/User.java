package com.example.HRT.PROJECT;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)

        private Integer id;
        private String name;
        private String status;
        private String location;
        private Integer proposedStartTime;
        private Integer actualStartTime;
        private Integer surgeryEndTime;
        private Integer exitTime;
        public Integer getId() {
            return id;
        }
        public void setId(Integer id) {
            this.id = id;
        }
        public String getName() {
            return name;
        }
        public void setName(String name) {
            this.name = name;
        }
        public String getStatus() {
            return status;
        }
        public void setStatus(String status) {
            this.status = status;
        }
        public String getLocation() {
            return location;
        }
        public void setLocation(String location) {
            this.location = location;
        }
        public Integer getProposedStartTime() {
            return proposedStartTime;
        }
        public void setProposedStartTime(Integer proposedStartTime) {
            this.proposedStartTime = proposedStartTime;
        }
        public Integer getActualStartTime() {
            return actualStartTime;
        }
        public void setActualStartTime(Integer actualStartTime) {
            this.actualStartTime = actualStartTime;
        }
        public Integer getSurgeryEndTime() {
            return surgeryEndTime;
        }
        public void setSurgeryEndTime(Integer surgeryEndTime) {
            this.surgeryEndTime = surgeryEndTime;
        }
        public Integer getExitTime() {
            return exitTime;
        }
        public void setExitTime(Integer exitTime) {
            this.exitTime = exitTime;
        }
}    

