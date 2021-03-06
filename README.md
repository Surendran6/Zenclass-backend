# ZEN-Mentos-Backend

# Mentor and Student Assigning with Database



Agenda

----------------------------------------------------------------------------------------------

1.Write API to create Mentor

2.Write API to create Student

3.Write API to Assign a student to Mentor
   > Select one mentor and Add multiple Student
   
   > A student who has a mentor should not be shown in List

4.Write API to Assign or Change Mentor for particular Student
   > Select One Student and Assign one Mentor
   
5.Write API to show all students for a particular mentor

--------------------------------------------------------------------------------------------------

Base URL https://zen-mentor-backend.herokuapp.com/
# Mentor Api's

<pre>GET          <a href="https://zen-mentor-backend.herokuapp.com/Mentors"> /Mentors </a></pre>

<pre>POST         <a href="https://zen-mentor-backend.herokuapp.com/Mentors"> /Mentors </a></pre>

<pre>GET by ID    <a href="https://zen-mentor-backend.herokuapp.com/Mentors/get-mentor/61e51dd0a315f90534c6c2a6">/Mentors/get-mentor/:ID </a></pre>

# Student Api's

<pre>GET          <a href="https://zen-mentor-backend.herokuapp.com/Students"> /Students </a></pre>

<pre>POST         <a href="https://zen-mentor-backend.herokuapp.com/Students"> /Students </a></pre>

<b>To get list of students whose mentors weren't assigned </b>

<pre>GET          <a href="https://zen-mentor-backend.herokuapp.com/Students/no-mentors"> /Students/no-mentors</a></pre>

<b>To assign or change Mentor for student</b>

<pre>PATCH        <a href="https://zen-mentor-backend.herokuapp.com/Students/assign-mentor/61e51ddfa315f90534c6c2a8"> /Students/assign-mentor/:student-id</a></pre>

<b> To assign mentors for multiple Students </b>

<pre>PATCH        <a href="https://zen-mentor-backend.herokuapp.com/Students/assign-mentor-students"> /Students/assign-mentor-students</a></pre>

<b> To Assign or Change Mentor for particular student </b>
  > Pass Mentor ID in request Body

<pre>PATCH        <a href="https://zen-mentor-backend.herokuapp.com/Students/assign-mentor/61e51ddfa315f90534c6c2a8"> /Students/assign-mentor/:student-id</a> </pre>

<b> To Assign mentor for multiple students </b>
  > Pass Mentor ID and Student ID as list in body
 
<pre>PATCH        <a href="https://zen-mentor-backend.herokuapp.com/Students/assign-mentor-students"> /Students/assign-mentor-students</a> </pre>

<b> To get all students of particular Mentor

<pre>GET          <a href="https://zen-mentor-backend.herokuapp.com/Students/mentor-students/61e51dd0a315f90534c6c2a6"> /Students/mentor-students/:mentor-id </a></pre>
 
