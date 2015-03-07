// Marks up repos for the /library/ page
$(".repo").each(function(index, repo) {
  var org = $(repo).attr("data-organization");
  var repo_name = $(repo).attr("data-repo");

  // Fetch its metadata
  $.getJSON("http://git-hub-cacher.appspot.com/repos/" + org + "/" + repo_name, function(repo_details) {
    // Update repository details based on content from Github
    $.each(repo_details, function(prop, value) {
      $(repo).find(".github." + prop).text(value);
    });

    // Update date fields to pretty print them
    $(repo).find(".date").each(function(idx, date) {
      $(date).text(new Date($(date).text()));
    });
  }).fail(function(jqxhr, text_status, error) {
    // If the repo wasn't found, remove it from the page
    if(error == "Not Found") {
      $(repo).remove();
    }
  });

  $.getJSON("http://git-hub-cacher.appspot.com/repos/" + org + "/" + repo_name + "/stats/contributors", function(contributors) {
    console.log("http://git-hub-cacher.appspot.com/repos/" + org + "/" + repo_name + "/stats/contributors")
    $.each(contributors, function(idx, contributor) {
      var li = '<li>'
        + '<a class="contributor" href="' + contributor['author']['html_url'] + '" target="_blank" data-toggle="tooltip" title="' + contributor['author']["login"] + '">'
        + '<img src="' + contributor['author']['avatar_url'] + '" alt="' + contributor['author']['login'] + '"/>'
        + '</a></li>';


      $(repo).find(".contributors").append(li);
    });

    $(".contributor").tooltip();
  }).fail(function(jqxhr, text_status, error) {
    if(error == "Not Found") {
      $(repo).find(".contributors").remove();
    }
  });
});

$(".author").each(function(index, element) {
  var author = $(element).attr("data-author");

  // Their profile
  $.getJSON("http://git-hub-cacher.appspot.com/users/" + author, function(profile) {
    // Update our template
    $(element).find("a.profile-link").attr("src", profile.html_url);
    $(element).find("img.avatar")
      .attr("src", profile.avatar_url)
      .attr("alt", profile.username);
    $(element).find(".fullname").text(profile.name);
    $(element).find(".username").text(profile.login);
    $(element).show();



  }).fail(function(jqxhr, text_status, error) {
    // If the repo wasn't found, remove it from the page
    if(error == "Not Found") {
      console.log("Could not find author in Github: " + author);
      $(element).remove();
    }
  });
});
