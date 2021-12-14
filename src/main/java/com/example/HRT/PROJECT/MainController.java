package com.example.HRT.PROJECT;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path="/demo")
public class MainController {
    @Autowired
    
    private UserRepository uRepository;

    @PostMapping (path ="/add" )
        public @ResponseBody String addNewUser(
            @RequestParam String name
            // ,
            // @RequestParam String status,
            // @RequestParam String location,
            // @RequestParam String proposedStartTime,
            // @RequestParam String actualStartTime,
            // @RequestParam String surgeryEndTime,
            // @RequestParam String exitTime
            ){
              User u = new User();
              u.setName(name);
              // u.setStatus(status);
              // u.setLocation(location);
              // u.setProposedStartTime(proposedStartTime);
              // u.setActualStartTime(actualStartTime);
              // u.setSurgeryEndTime(surgeryEndTime);
              // u.setExitTime(exitTime);
              uRepository.save(u);
              return "Patient Saved";

          }

    @GetMapping (path = "/all")
          public @ResponseBody Iterable<User>getAllUsers(){
              return uRepository.findAll();
          }


    @PutMapping (path = "/update/{id}")

          public @ResponseBody String uddateUser(
                @PathVariable int id, 
                @RequestParam String name,
                @RequestParam String status,
                @RequestParam String location,
                @RequestParam Integer proposedStartTime,
                @RequestParam Integer actualStartTime,
                @RequestParam Integer surgeryEndTime,
                @RequestParam Integer exitTime
              ){
                User u = uRepository.findById(id);
                u.setName(name);
                u.setStatus(status);
                u.setLocation(location);
                // u.setProposedStartTime(proposedStartTime);
                // u.setActualStartTime(actualStartTime);
                // u.setSurgeryEndTime(surgeryEndTime);
                // u.setExitTime(exitTime);
                uRepository.save(u);

            return ("Patient Updated");
          }

    @DeleteMapping("/delete/{id}")

          public @ResponseBody String deleteUser(@PathVariable int id){
                uRepository.deleteById(id);
            return "Patient Deleted";
          }
          
}
