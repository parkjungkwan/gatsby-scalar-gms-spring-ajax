-- ************************
-- 2017.09.04
-- [1]MEMBER
-- [2]MAJOR
-- [3]SUBJECT
-- [4]PROF
-- [5]STUDENT
-- [6]GRADE
-- [7]BOARD
-- ************************
SHOW TABLES;
-- ********************
-- [3]MEMBER_TAB
-- 2017.09.04
-- member_id,name,password,
-- ssn,regdate,phone,
-- email,profile
-- *******************
CREATE TABLE Member
(
	member_id VARCHAR(10),
	name VARCHAR(10),
	password VARCHAR(10),
	ssn VARCHAR(15),
	regdate DATETIME DEFAULT CURRENT_TIMESTAMP,
	phone VARCHAR(20),
	email VARCHAR(20),
	profile VARCHAR(20),
	PRIMARY KEY(member_id)
);
DROP TABLE Member;
INSERT INTO Member
(
	member_id,name,password,
	ssn,regdate,phone,
	email,profile
)
VALUES
(
	'mankiew','맨큐','1',
	'701201-123456',now(),'010-1234-5678',
	'mankiew@test.com','mankiew.jpg'
);
SELECT 
	member_id,name,password,
	ssn,phone,email,
	profile,regdate 
FROM Member;
SELECT 
	COUNT(*) AS count 
FROM Member;
UPDATE Member 
SET 
	password='2' 
WHERE 
	member_id='hong';
DELETE 
FROM Member 
WHERE 
	member_id='choi';
-- ************************
-- [2]MAJOR
-- 2017.08.02
-- major_id,title,subj_id,
-- member_id
-- ************************

CREATE TABLE MAJOR
(
	major_id VARCHAR(10),
	title VARCHAR(10),
	subj_id VARCHAR(10),
	member_id VARCHAR(10), 
	PRIMARY KEY(major_id),
	FOREIGN KEY(member_id) 
		REFERENCES Member(member_id)
		ON DELETE CASCADE
);
ALTER TABLE 
	major 
ADD 
	subj_id VARCHAR(10);
-- DML
INSERT INTO 
	Major
(
	major_id,title
)
VALUES(
	'',''
);
SELECT * FROM Major;
-- ************************
-- [2]SUBJECT_TAB
-- 2017.08.02
-- subj_id,title,major_id
-- ************************
-- DDL
CREATE TABLE Subject
(
	subj_id VARCHAR(10),
	title VARCHAR(10),
	PRIMARY KEY(subj_id)
);
-- DML
INSERT INTO Subject
(
	subj_id,title,major_id
)
VALUES
(
	'','',''
);

-- ************************
-- [4]PROF_TAB
-- 2017.08.02
-- member_id,salary
-- ************************
-- DDL
CREATE TABLE Prof
(
	member_id VARCHAR(10),
	salary VARCHAR(10),
	PRIMARY KEY(member_id)
);
-- DML
INSERT INTO Prof(
		member_id,salary)
	VALUES(
		'gogh','5000');
-- ************************
-- [5]STUDENT_TAB
-- 2017.08.02
-- member_id,stu_no
-- ************************
-- DDL
CREATE TABLE Student(
	member_id VARCHAR2(10),
	stu_no VARCHAR2(8),
	PRIMARY KEY(member_id),
	FOREIGN KEY(member_id) 
		REFERENCES Member(member_id)
		ON DELETE CASCADE
);
DROP TABLE Student;
-- DML


-- ************************
-- [6]GRADE_TAB
-- 2017.08.02
-- grade_seq,score,exam_date,
-- subj_id,member_id
-- ************************
-- DDL
CREATE TABLE Grade(
	grade_seq INT NOT NULL AUTO_INCREMENT,
	score VARCHAR(3),
	exam_date VARCHAR(12),
	subj_id VARCHAR(10),
	member_id VARCHAR(10),
	PRIMARY KEY(grade_seq),
	FOREIGN KEY(member_id) 
		REFERENCES Member(member_id)
		ON DELETE CASCADE,
	FOREIGN KEY(subj_id) 
		REFERENCES Subject(subj_id)
		ON DELETE CASCADE	
);
ALTER TABLE Grade
	RENAME COLUMN id 
	TO member_id;
DROP TABLE Grade;
-- DML
SELECT * FROM Grade;
INSERT INTO Grade(
		grade_seq,score,exam_date,
		subj_id,member_id)
	VALUES(
		seq.nextval,'90','2017-03',
		'java','hong');
-- member_id 를 입력하면 평균점수를 반환하는 sql
SELECT * FROM Member;
SELECT avg(score)
	FROM (SELECT DISTINCT
					m.member_id id ,m.name name ,mj.title major,
					g.SCORE score,sj.title subject,g.exam_date
			FROM member m,student s,grade g,
					subject sj,major mj
			WHERE 
			    m.member_id=s.member_id 
			    AND m.member_id=g.member_id
			    AND sj.MAJOR_ID=mj.MAJOR_ID
			    AND sj.subj_id=g.subj_id) t
	WHERE t.id='hong';

SELECT avg(score)
FROM (SELECT 
		m.member_id id ,m.name name ,
		g.score score,g.exam_date exam_date
	 FROM Grade g 
		INNER JOIN Subject s ON g.subj_id=s.subj_id
		INNER JOIN Member m ON m.member_id=g.member_id
) t
WHERE t.id='hong';

-- ************************
-- [7]BOARD_TAB
-- 2017.08.02
-- article_seq,id,title,
-- content,hitcount,regdate
-- ************************
-- DDL
CREATE TABLE Board(
	article_seq INT NOT NULL AUTO_INCREMENT,
	id VARCHAR(10),
	title VARCHAR(20),
	content VARCHAR(100),
	hitcount INT,
	regdate DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(article_seq)
);
DROP TABLE Board;
-- DML
INSERT INTO Board(article_seq,id,title,content,hitcount,regdate)
VALUES(seq.nextval,'kim','대중을 있는',
	'주는 얼마나 크고 품에 대중을 있는',0,SYSDATE);
SELECT * FROM Board;
SELECT COUNT(*) FROM BOARD;
SELECT * FROM Board WHERE id='hong';
UPDATE Board SET title='bonjour',content='comment cava' 
	WHERE article_seq=1000;
SELECT DISTINCT member_id 
FROM Board 
WHERE member_id LIKE '_i%';

SELECT DISTINCT ssn,name  
FROM Member m, Board b
WHERE m.id=b.id AND ROWNUM <= 10;

SELECT ssn,name 
FROM Member m, Board b,Grade g
WHERE m.id=b.id OR m.id=g.id;

-- ************************
-- [8]TEST_TAB
-- 2017.08.03
-- article_seq,id,title,
-- content,hitcount,regdate
-- ************************

select * from member where member_id like 'hong';
select * from major;
select * from member;
select rownum num,t.*
from (select * 
from member m join major j
on m.member_id = j.member_id) t
;
select * from student;
drop table student;

create view student (num,id,name,password,ssn,regdate,phone,email,title)
as
select rownum num, t.*
from(select 
		a.member_id id, a.name, rpad(substr(a.ssn,1,8),14,'*') ssn, 
		to_char(a.regdate,'yyyy-MM-dd') regdate, a.phone, a.email,
		listagg(s.title,',') within group(order by s.title) title
	from member a
		left join major m on a.member_id like m.member_id
		left join subject s on m.subj_id like s.subj_id
		group by a.member_id, a.name, a.ssn, a.regdate, a.phone, a.email
		order by regdate 
	)t
order by rownum desc;


select 
a.member_id, a.name, a.ssn, a.regdate, a.phone, a.email,
	listagg(s.title,',') within group(order by s.title) title
from member a
left join major m on a.member_id like m.member_id
left join subject s on m.subj_id like s.subj_id
group by a.member_id, a.name, a.ssn, a.regdate, a.phone, a.email;

select listagg(title,',') within group(order by title) title
from subject;



select * from student
where rownum <= 5;
;

select  t.*
from (select * from student
where num >((select count(*) from student) -5)) t
;


SELECT t2.*
FROM (SELECT ROWNUM seq,t.*
FROM (SELECT *FROM student ORDER BY num DESC) t) t2
WHERE t2.seq BETWEEN 6 AND 10;

SELECT t2.* 
FROM (SELECT ROWNUM seq,t.* 
   	  FROM (SELECT * 
   	  			FROM student 
   	  			ORDER BY num DESC) t) t2
WHERE t2.seq BETWEEN 1 AND 5;




select * from student;



select rownum, s.*
from student s
where rownum between 6 and 10;

select t.*
from (select rownum rnum, s.* 
		from student s)t
where t.rnum between 1 and 5;

SELECT t2.*
FROM (SELECT ROWNUM seq,t.*
  FROM (SELECT *
  FROM student
  WHERE name like '%홍%'
  ORDER BY num DESC) t) t2
WHERE t2.seq BETWEEN 1 AND 5;

select * from student
where name like  '%'
;


select 
	a.member_id id, 
	a.name name,
	rpad(SUBSTRING(a.ssn,1,7),14,'*') ssn,
	CONCAT(a.regdate,'yyyy-MM-dd') regdate,
	a.phone phone,
	a.email email,
	group_concat(s.title,',') subjects
    from member a
        left  join 
        	major m 
        	on a.member_id like m.member_id
        left join subject s 
        	on m.subj_id like s.subj_id
        group by 
        	a.member_id, a.name, a.ssn,
        	a.regdate,a.phone,a.email
        order by regdate ;








