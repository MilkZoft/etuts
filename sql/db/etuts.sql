--
-- Estructura de tabla para la tabla `blog_categories`
--

CREATE TABLE IF NOT EXISTS `blog_categories` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `parentId` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `category` varchar(150) NOT NULL,
  `slug` varchar(150) NOT NULL,
  `language` varchar(20) NOT NULL DEFAULT 'en',
  `situation` varchar(20) NOT NULL DEFAULT 'Active',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Volcado de datos para la tabla `blog_categories`
--

INSERT INTO `blog_categories` (`id`, `parentId`, `category`, `slug`, `language`, `situation`) VALUES
(1, 0, 'Code', 'code', 'en', 'Active'),
(2, 1, 'PHP', 'php', 'en', 'Active'),
(3, 0, 'Design', 'design', 'en', 'Active'),
(4, 3, 'Illustrator', 'illustrator', 'en', 'Active'),
(5, 0, 'Código', 'codigo', 'es', 'Active');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `blog_posts`
--

CREATE TABLE IF NOT EXISTS `blog_posts` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `userId` int(11) unsigned NOT NULL DEFAULT '0',
  `title` varchar(250) NOT NULL,
  `slug` varchar(250) NOT NULL,
  `excerpt` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `author` varchar(100) NOT NULL,
  `mainImage` varchar(250) NOT NULL,
  `tags` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `modifiedAt` datetime NOT NULL,
  `year` varchar(4) NOT NULL,
  `month` varchar(2) NOT NULL,
  `day` varchar(2) NOT NULL,
  `enableComments` tinyint(1) unsigned NOT NULL DEFAULT '1',
  `buffer` tinyint(1) unsigned NOT NULL DEFAULT '1',
  `language` varchar(2) NOT NULL DEFAULT 'en',
  `situation` varchar(15) NOT NULL DEFAULT 'Published',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;

--
-- Volcado de datos para la tabla `blog_posts`
--

INSERT INTO `blog_posts` (`id`, `userId`, `title`, `slug`, `excerpt`, `content`, `author`, `mainImage`, `tags`, `createdAt`, `modifiedAt`, `year`, `month`, `day`, `enableComments`, `buffer`, `language`, `situation`) VALUES
(1, 1, 'Prueba', 'prueba', 'Esto es una prueba...', '<p>\r\n                You''re live! Nice. We''ve put together a little post to introduce you to the Ghost editor and get you started. You can manage your content by signing in to the admin area at. When you arrive, you can select this post from a list on the left and see a preview of it on the right. Click the little pencil icon at the top of the preview to edit this post and read the next section!\r\n            </p>\r\n\r\n            <h2>Code</h2>\r\n\r\n<div id="editor" class="editor">def reverseString(str):\r\n return str[::-1]\r\n\r\nfunction reverseString($string) {\r\n    $length = strlen($string) - 1;\r\n    $reverse = "";\r\n \r\n    for ($i = $length; $i >= 0; $i--) {\r\n        $reverse .= $string{$i};\r\n    }\r\n \r\n    return $reverse;\r\n}\r\n</div>\r\n\r\n            <h2>Getting Started</h2>\r\n\r\n            <p>Ghost uses something called Markdown for writing. Essentially, it''s a shorthand way to manage your post formatting as you write!</p>\r\n\r\n            <ul>\r\n                <li>Item number one</li>\r\n                <li>Item number two\r\n                    <ul>\r\n                        <li>A nested item</li>\r\n                    </ul>\r\n                </li>\r\n                <li>A final item</li>\r\n            </ul>\r\n\r\n            <h2>Links</h2>\r\n                \r\n            <p>Want to link to a source? <a href="#" title="">No problem</a>. If you paste in url, like http://ghost.org - it''ll automatically be linked up. But if you want to customise your anchor text, you can do that too! Here''s a link to the Ghost website. Neat.</p>\r\n\r\n            <p><img src="https://ghost.org/images/ghost.png" /></p>\r\n\r\n            <blockquote>\r\n                <p>Wisdomous - it''s definitely a word.</p>\r\n            </blockquote>', 'Carlos', '/images/articles/article1.jpg', 'php, html5, css', '2014-07-05 00:00:00', '0000-00-00 00:00:00', '2014', '07', '05', 1, 1, 'es', 'Published'),
(2, 0, 'Lorem ipsum dolor sit amet', 'lorem-ipsum-dolor-sit-amet', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat consectetur pellentesque. Nam ac elit risus, ac blandit dui. Duis rutrum porta tortor ut convallis. Duis rutrum porta tortor ut convallis.', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat consectetur pellentesque. Nam ac elit risus, ac blandit dui. Duis rutrum porta tortor ut convallis. Duis rutrum porta tortor ut convallis.</p>', 'Cristina', '/images/articles/article2.jpg', 'web, design', '2014-07-05 00:00:00', '2014-07-05 00:00:00', '2014', '07', '05', 1, 1, 'en', 'Published'),
(3, 0, 'Lorem ipsum dolor sit amet', 'lorem-ipsum-dolor-sit-amet', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat consectetur pellentesque. Nam ac elit risus, ac blandit dui. Duis rutrum porta tortor ut convallis. Duis rutrum porta tortor ut convallis.', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat consectetur pellentesque. Nam ac elit risus, ac blandit dui. Duis rutrum porta tortor ut convallis. Duis rutrum porta tortor ut convallis.</p>', 'Cristina', '/images/articles/article2.jpg', 'web, design', '2014-07-05 00:00:00', '2014-07-05 00:00:00', '2014', '07', '05', 1, 1, 'en', 'Published'),
(4, 0, 'Lorem ipsum dolor sit amet', 'lorem-ipsum-dolor-sit-amet', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat consectetur pellentesque. Nam ac elit risus, ac blandit dui. Duis rutrum porta tortor ut convallis. Duis rutrum porta tortor ut convallis.', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat consectetur pellentesque. Nam ac elit risus, ac blandit dui. Duis rutrum porta tortor ut convallis. Duis rutrum porta tortor ut convallis.</p>', 'Cristina', '/images/articles/article1.jpg', 'web, design', '2014-07-05 00:00:00', '2014-07-05 00:00:00', '2014', '07', '05', 1, 1, 'en', 'Published'),
(5, 0, 'Lorem ipsum dolor sit amet', 'lorem-ipsum-dolor-sit-amet', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat consectetur pellentesque. Nam ac elit risus, ac blandit dui. Duis rutrum porta tortor ut convallis. Duis rutrum porta tortor ut convallis.', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat consectetur pellentesque. Nam ac elit risus, ac blandit dui. Duis rutrum porta tortor ut convallis. Duis rutrum porta tortor ut convallis.</p>', 'Cristina', '/images/articles/article2.jpg', 'web, design', '2014-07-05 00:00:00', '2014-07-05 00:00:00', '2014', '07', '05', 1, 1, 'en', 'Published'),
(6, 0, 'Lorem ipsum dolor sit amet', 'lorem-ipsum-dolor-sit-amet', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat consectetur pellentesque. Nam ac elit risus, ac blandit dui. Duis rutrum porta tortor ut convallis. Duis rutrum porta tortor ut convallis.', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat consectetur pellentesque. Nam ac elit risus, ac blandit dui. Duis rutrum porta tortor ut convallis. Duis rutrum porta tortor ut convallis.</p>', 'Cristina', '/images/articles/article2.jpg', 'web, design', '2014-07-05 00:00:00', '2014-07-05 00:00:00', '2014', '07', '05', 1, 1, 'en', 'Published'),
(7, 0, 'Lorem ipsum dolor sit amet', 'lorem-ipsum-dolor-sit-amet', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat consectetur pellentesque. Nam ac elit risus, ac blandit dui. Duis rutrum porta tortor ut convallis. Duis rutrum porta tortor ut convallis.', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat consectetur pellentesque. Nam ac elit risus, ac blandit dui. Duis rutrum porta tortor ut convallis. Duis rutrum porta tortor ut convallis.</p>', 'Cristina', '/images/articles/article1.jpg', 'web, design', '2014-07-05 00:00:00', '2014-07-05 00:00:00', '2014', '07', '05', 1, 1, 'en', 'Published'),
(8, 0, 'Lorem ipsum dolor sit amet', 'lorem-ipsum-dolor-sit-amet', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat consectetur pellentesque. Nam ac elit risus, ac blandit dui. Duis rutrum porta tortor ut convallis. Duis rutrum porta tortor ut convallis.', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat consectetur pellentesque. Nam ac elit risus, ac blandit dui. Duis rutrum porta tortor ut convallis. Duis rutrum porta tortor ut convallis.</p>', 'Cristina', '/images/articles/article2.jpg', 'web, design', '2014-07-05 00:00:00', '2014-07-05 00:00:00', '2014', '07', '05', 1, 1, 'en', 'Published'),
(9, 0, 'Lorem ipsum dolor sit amet', 'lorem-ipsum-dolor-sit-amet', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat consectetur pellentesque. Nam ac elit risus, ac blandit dui. Duis rutrum porta tortor ut convallis. Duis rutrum porta tortor ut convallis.', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat consectetur pellentesque. Nam ac elit risus, ac blandit dui. Duis rutrum porta tortor ut convallis. Duis rutrum porta tortor ut convallis.</p>', 'Cristina', '/images/articles/article1.jpg', 'web, design', '2014-07-05 00:00:00', '2014-07-05 00:00:00', '2014', '06', '05', 1, 1, 'en', 'Published'),
(10, 0, 'Lorem ipsum dolor sit amet', 'lorem-ipsum-dolor-sit-amet', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat consectetur pellentesque. Nam ac elit risus, ac blandit dui. Duis rutrum porta tortor ut convallis. Duis rutrum porta tortor ut convallis.', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat consectetur pellentesque. Nam ac elit risus, ac blandit dui. Duis rutrum porta tortor ut convallis. Duis rutrum porta tortor ut convallis.</p>', 'Cristina', '/images/articles/article2.jpg', 'web, design', '2014-07-05 00:00:00', '2014-07-05 00:00:00', '2014', '07', '05', 1, 1, 'en', 'Published'),
(11, 0, 'Lorem ipsum dolor sit amet', 'lorem-ipsum-dolor-sit-amet', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat consectetur pellentesque. Nam ac elit risus, ac blandit dui. Duis rutrum porta tortor ut convallis. Duis rutrum porta tortor ut convallis.', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat consectetur pellentesque. Nam ac elit risus, ac blandit dui. Duis rutrum porta tortor ut convallis. Duis rutrum porta tortor ut convallis.</p>', 'Cristina', '/images/articles/article2.jpg', 'web, design', '2014-07-05 00:00:00', '2014-07-05 00:00:00', '2014', '07', '05', 1, 1, 'en', 'Published'),
(12, 0, 'Esto es mi primer prueba', 'esto-es-mi-primer-prueba', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat consectetur pellentesque. Nam ac elit risus, ac blandit dui. Duis rutrum porta tortor ut convallis. Duis rutrum porta tortor ut convallis.', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat consectetur pellentesque. Nam ac elit risus, ac blandit dui. Duis rutrum porta tortor ut convallis. Duis rutrum porta tortor ut convallis.</p>', 'Cristina', '/images/articles/article1.jpg', 'web, design', '2014-07-05 00:00:00', '2014-07-05 00:00:00', '2014', '07', '05', 1, 1, 'en', 'Published'),
(13, 0, 'Holaa', 'holaa', 'Esto es otra prueba', 'asdasdasd', 'Carlos', '/images/articles/article1.jpg', '', '2014-07-07 00:00:00', '2014-07-07 00:00:00', '2014', '07', '07', 1, 1, 'en', 'Published'),
(14, 0, 'Other post', 'other post', 'asdsad', 'asdasdasd', 'Carlos', '/images/articles/article2.jpg', '', '2014-07-07 00:00:00', '0000-00-00 00:00:00', '2014', '07', '07', 1, 1, 'en', 'Published'),
(15, 0, 'asdsad', 'asdsa', 'sadasd', 'asdsadasd', 'Criss', '/images/articles/article1.jpg', '', '2014-07-08 00:00:00', '0000-00-00 00:00:00', '2014', '07', '08', 1, 1, 'en', 'Published'),
(16, 0, 'asfsdsdsad', 'asdasdsad', 'sadsadsad', 'asdsadasd', 'Criss', '/images/articles/article1.jpg', '', '2014-07-08 00:00:00', '0000-00-00 00:00:00', '2014', '07', '08', 1, 1, 'en', 'Published');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `blog_re_categories2posts`
--

CREATE TABLE IF NOT EXISTS `blog_re_categories2posts` (
  `categoryId` int(11) unsigned NOT NULL DEFAULT '0',
  `postId` int(11) unsigned NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `blog_re_categories2posts`
--

INSERT INTO `blog_re_categories2posts` (`categoryId`, `postId`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 9),
(1, 10),
(1, 11),
(1, 12),
(1, 13),
(1, 14);