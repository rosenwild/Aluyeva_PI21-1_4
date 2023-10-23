function Book({ bookInfo, size = 200 }) {
  return (
    <Card classname={"bookcard"}>
      <img
        className="bok"
        src={bookInfo.link}
        alt={bookInfo.name}
        width={size * 0.75}
        height={size}
      />
      <p> {bookInfo.name} </p>
      <p> {bookInfo.description} </p>
    </Card>
  );
}

function Card({ children, classname }) {
  return <div className={classname}>{children}</div>;
}

export default function KidsShelf({ category }) {
  if (category.name == "kids") {
    return (
      <Card classname={"card"}>
        <Book
          bookInfo={{
            name: "Война и Мир",
            link:
              "https://basket-01.wb.ru/vol22/part2212/2212738/images/big/1.jpg",
            description:
              "Роман-эпопея Льва Николаевича Толстого, описывающий русское общество в эпоху войн против Наполеона в 1805—1812 годах."
          }}
          size={200}
        />
        <Book
          bookInfo={{
            name: "Five Nights at Freddys",
            link:
              "https://cdn.kobo.com/book-images/5ac4c89f-b6d0-4291-962a-adb30be39cda/1200/1200/False/into-the-pit-an-afk-book-five-nights-at-freddy-s-fazbear-frights-1.jpg",
            description:
              "Книга жанра ужасы, написанная Скоттом Коутоном и Кирой Брид-Райсли, основой для которой послужила одноименная серия видеоигр"
          }}
          size={200}
        />
        <Book
          bookInfo={{
            name: "Ядерная физика",
            link:
              "https://img4.labirint.ru/rc/6674e73dd710a3a6b1f30aecfcc21325/363x561q80/books49/487098/cover.jpg?1563823566",
            description:
              "В пособии рассмотрены основные понятия и законы физики атомного ядра и частиц. Пособие предназначено для учебных целей."
          }}
          size={200}
        />
      </Card>
    );
  } else if ((category.name = "adults")) {
    return (
      <Card classname={"Page"}>
        <Card classname={"card"}>
          <Book
            bookInfo={{
              name: "Мой милый пони",
              link: "https://i.harperapps.com/covers/9780063060692/x325.jpg"
            }}
            size={200}
          />
          <Book
            bookInfo={{
              name: "Чародейки: часть 1",
              link:
                "https://img3.labirint.ru/rc/500c6ad446928cc66d1f4a93080c3a91/363x561q80/books85/842605/cover.jpg?1643721903"
            }}
            size={200}
          />
          <Book
            bookInfo={{
              name: "Винкс: Магия Блум",
              link:
                "https://img3.labirint.ru/rc/c5e9bcd95aa88459da10dc6b8a786104/363x561q80/books20/192085/cover.jpg?1280394613"
            }}
            size={200}
          />
        </Card>
        <Card classname={"bestItem"}>BEST ITEM</Card>
        <Card classname={"card"}>
          <Book
            bookInfo={{
              name: "Властелин Колец",
              link:
                "https://img4.labirint.ru/rc/4fbbdd5e4adc9e81470e83b4a24bdb54/363x561q80/books53/524024/cover.jpg?1613395540"
            }}
            size={200}
          />
          <div classname="describe">
            <p>
              {" "}
              «Властели́н коле́ц» (англ. The Lord of the Rings) — роман-эпопея
              английского писателя Дж. Р. Р. Толкина, одно из самых известных
              произведений жанра фэнтези. «Властелин колец» был написан как
              единая книга, но из-за объёма при первом издании его разделили на
              три части — «Братство Кольца», «Две крепости» и «Возвращение
              короля». В виде трилогии он публикуется и по сей день, хотя часто
              в едином томе. Роман считается первым произведением жанра
              эпическое фэнтези, а также его классикой. «Властелин колец» — одна
              из самых известных и популярных книг XX века. Книга переведена по
              меньшей мере на 38 языков. Она оказала огромное влияние на
              литературу в жанре фэнтези, на настольные и компьютерные игры, на
              кинематограф и вообще на мировую культуру. Под влиянием работ
              профессора Толкина появилось движение толкинистов. Большим успехом
              пользовалась и экранизация книги, созданная режиссёром Питером
              Джексоном.{" "}
            </p>{" "}
          </div>
        </Card>
      </Card>
    );
  }
}
