$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/dankreiger.json',
    dataType: 'jsonp',
    success: (response) => {
      response.courses.completed.map((course) => {
        $('#badges').append(
          `<div class="course">
            <h3>${course.title}</h3>
            <img src="${course.badge}"/>
            <a href="${course.url}" class="btn btn-primary">See Course</a>
          </div>`
        )
      });
    }
  })
});
