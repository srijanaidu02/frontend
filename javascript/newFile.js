<html>
    <head>
        <script>
            function totalCount(){ }

            var total=document.getElementsByName("gender")
            alert("Total count for radio buttons is="+total.length)
    }
        </script>
    </head>
    <body>
        <form>
            Male:<input type="radio" name="gender" value="male" />
            Female:<input type="radio" name="gender" value="female" />
            <br />
            <input type="submit" onclick="totalCount()" />
        </form>
    </body>
</html>;