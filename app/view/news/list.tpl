<!-- app/view/news/list.tpl -->
<html>
  <head>
    <title>Hacker New</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
    <ul class="news-view view">
      {% for item in list %}
        <li class="item">
         <p> <a href="{{ item.url }}">{{ item.title }} </a></p>
         <p>{{ helper.relativeTime(item.time) }}</p>
        </li>
      {% endfor %}
    </ul>
  </body>
</html>