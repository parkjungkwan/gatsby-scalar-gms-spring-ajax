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

select *
from
	member a
	left join major m 
		on a.member_id like m.member_id
	left join subject s 
		on m.subj_id like s.subj_id
	group by 
		a.member_id, a.name, a.ssn, 
		a.regdate, a.phone, a.email
	order by regdate
;	




