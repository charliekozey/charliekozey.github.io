<!-- title: Recurse Center Week 2: Tue Jan 09 -->

Worked from home today.

Went in circles trying to get flask-migrate to play well with docker compose. As it turns out, I forgot I had changed the database name in the url (facepalm) and that was the last thing I checked instead of the first, which it should have been. But I feel like I understand things a lot better (like using the docker gui for terminal and file editing) and now it runs migrate-upgrade-seed on its own!
