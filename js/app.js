$.when($(".repo").each(function(index, repo) {
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
      $(date).text((new Date($(date).text())).toLocaleString());
    });

    // Update the last-updated attribute so we can later sort
    var date_epoch = (new Date(repo_details.updated_at)).getTime() / 1000;
    $(repo).attr('data-last-updated', date_epoch);
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

    //$(".contributor").tooltip();
  }).fail(function(jqxhr, text_status, error) {
    if(error == "Not Found") {
      $(repo).find(".contributors").remove();
    }
  });
})).done(function() { 
  // Sort the repos based on their last updated date
  var repos = $(".repo").sort(function(a, b) {
    return $(a).attr('data-last-updated') - $(b).attr('data-last-updated');
  });
  console.log(repos);
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

