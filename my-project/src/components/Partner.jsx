import { useState } from "react";

export default function Partner() {
  const [image, setImage] = useState({
    aws: "https://firebasestorage.googleapis.com/v0/b/alba-homepage.appspot.com/o/AWS.svg?alt=media&token=75f66e0f-3141-412d-bc88-c382f74679ec",
    cloud:
      "https://firebasestorage.googleapis.com/v0/b/alba-homepage.appspot.com/o/cloud.svg?alt=media&token=16e62349-7185-4987-b90f-2357215afa00",
    angular:
      "https://firebasestorage.googleapis.com/v0/b/alba-homepage.appspot.com/o/angular.svg?alt=media&token=53558348-4c2c-4e9a-a933-43f59805fe5f",
    css: "https://firebasestorage.googleapis.com/v0/b/alba-homepage.appspot.com/o/css.svg?alt=media&token=3b68f70b-f720-468a-ab85-9043d75be6c5",
    html: "https://firebasestorage.googleapis.com/v0/b/alba-homepage.appspot.com/o/html.svg?alt=media&token=b763ddcb-86da-4c5e-8c5f-dd75d1a056bf",
    js: "https://firebasestorage.googleapis.com/v0/b/alba-homepage.appspot.com/o/js.svg?alt=media&token=3dcaef54-6ebc-422d-a93d-25a3dbbde843",
    php: "https://firebasestorage.googleapis.com/v0/b/alba-homepage.appspot.com/o/php.svg?alt=media&token=288fd793-d885-4ef9-b3a4-79a6cb68b875",
    react:
      "https://firebasestorage.googleapis.com/v0/b/alba-homepage.appspot.com/o/react.svg?alt=media&token=29bebd74-b12f-4f82-951f-04554957eccd",
    mongo:
      "https://firebasestorage.googleapis.com/v0/b/alba-homepage.appspot.com/o/mongo.svg?alt=media&token=def8aa03-6a42-4e3b-8dda-9fa5fdc6c281",
    python:
      "https://firebasestorage.googleapis.com/v0/b/alba-homepage.appspot.com/o/python.svg?alt=media&token=d97715e4-a5ce-4dda-b2a7-bf7c54ed5850",
    emerald:
      "https://firebasestorage.googleapis.com/v0/b/alba-homepage.appspot.com/o/emerald.svg?alt=media&token=1dd921e8-2e9b-4821-b000-5713545a4c66",
    mysql:
      "https://firebasestorage.googleapis.com/v0/b/alba-homepage.appspot.com/o/mysql.svg?alt=media&token=c562d03b-564a-47c4-b06e-ed90ef8128f6",
    postgresql:
      "https://firebasestorage.googleapis.com/v0/b/alba-homepage.appspot.com/o/postgresql.svg?alt=media&token=ddc4543b-54e3-43e6-9f85-f8f09dd0bb18",
    sqlserver:
      "https://firebasestorage.googleapis.com/v0/b/alba-homepage.appspot.com/o/sqlserver.svg?alt=media&token=c7430946-cf43-4aa6-a61d-a46ca1206b3a",
  });

  return (
    <>
      <div className="grid grid-cols-3 mt-10 mx-10 gap-5 md:mx-20 md:px-10 md:grid-cols-6 md:mt-24">
        <img src={image.aws} className="w-36 h-36  mx-auto" />
        <img src={image.cloud} className="w-36 h-36  mx-auto" />
        <img src={image.angular} className="w-36 h-36  mx-auto" />
        <img src={image.css} className="w-36 h-36  mx-auto" />
        <img src={image.html} className="w-36 h-36  mx-auto" />
        <img src={image.js} className="w-36 h-36  mx-auto" />
        <img src={image.php} className="w-36 h-36  mx-auto" />
        <img src={image.react} className="w-36 h-36  mx-auto" />
        <img src={image.mongo} className="w-36 h-36  mx-auto" />
        <img src={image.python} className="w-36 h-36  mx-auto" />
        <img src={image.emerald} className="w-36 h-36  mx-auto" />
        <img src={image.mysql} className="w-36 h-36  mx-auto" />
        <img src={image.postgresql} className="w-36 h-36  mx-auto" />
        <img src={image.sqlserver} className="w-36 h-36  mx-auto" />
      </div>
    </>
  );
}
