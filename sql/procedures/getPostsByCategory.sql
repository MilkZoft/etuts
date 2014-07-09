DROP PROCEDURE IF EXISTS getPostsByCategory;

DELIMITER $$

CREATE PROCEDURE getPostsByCategory(
  IN _category VARCHAR(100),
  IN _language VARCHAR(2),
  IN _page INT, 
  IN _max INT)
BEGIN
  DECLARE _start INT DEFAULT 0;
  DECLARE _limit1 INT DEFAULT 0;
  DECLARE _limit2 INT DEFAULT 0;

  SET _limit1 = 0;
  SET _limit2 = _max;

  IF _page > 0 THEN
    SET _limit1 = _page * _max - _max;
  END IF;

  SELECT COUNT(1) AS total 
    FROM (
      SELECT blog_posts.id FROM blog_posts 
        LEFT JOIN blog_re_categories2posts ON (blog_re_categories2posts.postId = blog_posts.id) 
        LEFT JOIN blog_categories ON (blog_categories.id = blog_re_categories2posts.categoryId) 
        WHERE blog_categories.slug = _category 
        GROUP BY blog_posts.id
    ) AS Result;

  SELECT  title, blog_posts.slug, excerpt, content, author, mainImage, createdAt, day, month, year, blog_posts.language, 
    GROUP_CONCAT(blog_categories.category SEPARATOR ', ') AS categories
    FROM blog_posts 
      LEFT JOIN blog_re_categories2posts ON (blog_re_categories2posts.postId = blog_posts.id)
      LEFT JOIN blog_categories ON (blog_categories.id = blog_re_categories2posts.categoryId)
      WHERE blog_categories.slug = _category  
      AND blog_posts.language = _language 
      AND blog_categories.language = _language
      AND blog_posts.situation = 'Published'
      GROUP BY blog_posts.id
      ORDER BY blog_posts.id DESC
      LIMIT _limit1, _limit2;

END $$
DELIMITER ;