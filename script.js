
      window.onload = load();

      var currentDay = moment().format("MM-DD-YYYY");
      var currentTime = moment().format("HH");
      var currentTimeNum = +currentTime;
      var classData = $(".input-group-text").data()

      function dayPush() {
        $("#date").text(currentDay)
      }

      function timeCheck() {
        $(".input-group-text").each(function () {
          var value = parseInt(Object.values($(this).data()));
          if (value > currentTimeNum) {
            $(this).css("background-color", "lime")
          } else if (value < currentTimeNum) {
            $(this).css("background-color", "pink")
          } else if (value === currentTimeNum) {
            $(this).css("background-color", "cyan")
          }
        });
      };

      dayPush()
      timeCheck()

      $("#9AMsaveButton").click(function () {
        $("#9AMtext").each(function () {
          var id = $(this).attr('id');
          var value = $(this).val();
          localStorage.setItem(id, value);
          console.log(id, value)
        });
      });

      $("#10AMsaveButton").click(function () {
        $("#10AMtext").each(function () {
          var id = $(this).attr('id');
          var value = $(this).val();
          localStorage.setItem(id, value);
          console.log(id, value)
        });
      });

      $("#11AMsaveButton").click(function () {
        $("#11AMtext").each(function () {
          var id = $(this).attr('id');
          var value = $(this).val();
          localStorage.setItem(id, value);
          console.log(id, value)
        });
      });

      $("#12PMsaveButton").click(function () {
        $("#12PMtext").each(function () {
          var id = $(this).attr('id');
          var value = $(this).val();
          localStorage.setItem(id, value);
          console.log(id, value)
        });
      });

      $("#1PMsaveButton").click(function () {
        $("#1PMtext").each(function () {
          var id = $(this).attr('id');
          var value = $(this).val();
          localStorage.setItem(id, value);
          console.log(id, value)
        });
      });

      $("#2PMsaveButton").click(function () {
        $("#2PMtext").each(function () {
          var id = $(this).attr('id');
          var value = $(this).val();
          localStorage.setItem(id, value);
          console.log(id, value)
        });
      });

      $("#3PMsaveButton").click(function () {
        $("#3PMtext").each(function () {
          var id = $(this).attr('id');
          var value = $(this).val();
          localStorage.setItem(id, value);
          console.log(id, value)
        });
      });

      $("#4PMsaveButton").click(function () {
        $("#4PMtext").each(function () {
          var id = $(this).attr('id');
          var value = $(this).val();
          localStorage.setItem(id, value);
          console.log(id, value)
        });
      });

      $("#5PMsaveButton").click(function () {
        $("#5PMtext").each(function () {
          var id = $(this).attr('id');
          var value = $(this).val();
          localStorage.setItem(id, value);
          console.log(id, value)
        });
      });

      function load() {
        $(".input").each(function () {
          var id = $(this).attr('id');
          var value = localStorage.getItem(id);

          $(this).val(value);

        });
      };


