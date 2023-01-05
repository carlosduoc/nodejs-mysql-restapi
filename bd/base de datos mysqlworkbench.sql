
use curso;
create table usuarios (
id int(11) not null auto_increment,
nombre varchar (80) NOT NULL,
apellido varchar (80) NOT NULL,
FECHA_NACIMIENTO DATETIME NULL,
PRIMARY KEY (id)
);

alter table usuarios add column telefono varchar(45) not null;
alter table usuarios modify column telefono varchar(20) not null;

insert into usuarios (
nombre, apellido, fecha_nacimiento,telefono) 
values ('carlos','cabezas','1980-08-02 12:00:00', '940713028');
insert into usuarios (
nombre, apellido, fecha_nacimiento,telefono) 
values ('carlos','cabezas','1980-08-02 12:00:00', '940734534528');
insert into usuarios (
nombre, apellido, fecha_nacimiento,telefono) 
values ('genaro','messi','1981-08-02 12:00:00', '94073453428');
insert into usuarios (
nombre, apellido, fecha_nacimiento,telefono) 
values ('eulogio','valverde','1982-08-02 12:00:00', '940713564');

update usuarios set nombre = 'alberto' where id = 2;
update usuarios set apellido = 'otamelni' where id = 2;
select * from usuarios;

use curso;
create table publicaciones (
id int(11) NOT NULL auto_increment,
autor_id int(11) not null,
titulo varchar(150) not null,
texto text not null,
primary key (id),
foreign key (autor_id) references usuarios(id)
);

INSERT INTO publicaciones (
autor_id, titulo, texto)
values ( '2','prueba de sonido,','lo vamos a probar cuuando
lleguemos a la casa de al lado');

INSERT INTO publicaciones (
autor_id, titulo, texto)
values ( '2','escalaridad,','tesoro mio es lo maximo');

INSERT INTO publicaciones (
autor_id, titulo, texto)
values ( '3','cloro,','sirve para limpiar la ropa');

update publicaciones set autor_id = '1' where id = 1;

select * from publicaciones;

select p.id, p.titulo, p.texto,
concat(u.nombre, ' ', u.apellido) as 'autor'
from publicaciones p, usuarios u 
where p.autor_id = u.id;
