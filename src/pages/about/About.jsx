import React from "react";
import ashLogo from "../../assets/ashqelonLogo.svg";
import styles from "./about.module.css";

export default function About() {
  return (
    <div className="container">
      <div className={styles.about}>
        <h1>Русский культурный центр в городе Ашкелон</h1>
        <div className={styles.aboutDesc}>
          <p>
          Амута &quot;Аврора&quot;была создана в 1999 году по инициативе Софьи Бейлиной,как
культурный центр русскоязычной алии г.Ашкелона. Переезд-это всегда стресс,а тем
более в другую страну, и людям, особенно пожилым, крайне важно не отрываться от
привычной для них духовной жизни.В 2006году генеральным директором
&quot;Авроры&quot;становится Вероника Молотников.В наши дни амута&quot;Аврора&quot;продолжает
культурно-просветительские традиции,и является центром общения также и для новых
русскоязычных репатриантов.<br /><br />
Одним из важных направлений деятельности Амуты&quot;Аврора&quot;-оказание юридической и
правовой помощи для получения пенсий из стран исхода.Эта сфера деятельности
Амуты объединила тысячи пенсионеров Ашкелона,нуждающихся в подобной
помощи.Организатором этой работы является Вероника Молотников.Много внимания
в работе Амуты уделяется детям:на ее базе действует детская хореографическая студия
ансамбля&quot;Престиж&quot; под руководством Светланы Амелиной.Дети занимаются танцами-
модерн.<br /><br />
На базе амуты &quot;Авроры&quot;проходят лекции,встречи с литераторами,сотрудниками
музеев,историками литературы,искусствоведами,выступают музыканты-исполнители
барочной и классической музыки.В 2023году&quot;Аврора&quot;начала большой культурный
проект&quot;По линии наибольшего сопротивления&quot;,эпиграфом к которому,стала цитата
одного из самого выдающегося поэта Серебряного Века,Николая Гумилева:&quot;Если вы
хотите чего-либо достигнуть в жизни, всегда идите по линии наибольшего
сопротивления.<br /><br />
Эта цитата и объединила историю Серебряного Века, биографии и судьбы героев
разных стран и эпох, забытые имена в различных жанрах культуры и
искусства.Руководитель проекта Марина Писаренко,до репатриации заведующая
Мемориальным Музеем Льва Гумилева,филиалом Музея А.Ахматовой в Фонтанном
Доме в Санкт-Петербурге.<br />
<br />
Мы приглашаем всех желающих на наши мероприятия,где их ждёт не только теплая и
дружеская атмосфера,но и соприкосновение с миром искусства и литературы,а также
множество удивительных открытий.
          </p>
          <img src={ashLogo} alt="aboutIMG" className={styles.aboutImg} />
        </div>
      </div>
    </div>
  );
}
