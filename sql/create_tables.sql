
CREATE TABLE IF NOT EXISTS User(
  id int not null primary key auto_increment,
  name varchar(20) not null,
  email varchar(50) not null,
  password varchar(40) not null
);

CREATE TABLE IF NOT EXISTS Category(
  id int not null primary key auto_increment,
  name varchar(50) not null
);

CREATE TABLE IF NOT EXISTS Data(
  id int not null primary key auto_increment,
  title varchar(100) not null,
  dataSize varchar(50) default '0' not null,
  price varchar(50) default '0' not null,
  dataTime date not null,
  path varchar(500) not null,
  user_id int,
  category_id int
);

ALTER TABLE Data ADD CONSTRAINT FK_Reference_user FOREIGN KEY (user_id)
  REFERENCES User (id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE Data ADD CONSTRAINT FK_Reference_category FOREIGN KEY (category_id)
  REFERENCES Category (id) ON DELETE CASCADE ON UPDATE CASCADE;