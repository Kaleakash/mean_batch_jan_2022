function EmployeeDetails() {
    var pp = new Project();
    this.display = ()=> {
        return "This is Employee class object"
    }

    // we are calling project function through Employee object. 
    this.checkProjectDetails = ()=> {
        return pp.projectInfo();
    }
}
