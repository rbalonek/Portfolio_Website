import React from "react";
import "./Contact.css";

export default function Contact(props) {
  return (
    <div id="contact" className="contact__container">
      <h1>CONTACT</h1>
      <div className="contact__icon-holders">
        <a
          onClick={() =>
            props.Event("Contact Section", "Github Clicked", "CONTACT_SECTION")
          }
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/rbalonek/"
        >
          <img
            className="contact__button"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEUAAAD///9sbGz7+/vw8PA+Pj7h4eHJycn29va+vr78/PxMTEyWlpbm5ube3t6ioqKBgYGoqKhXV1fY2NiysrKgoKBTU1N0dHRlZWUlJSURERFHR0fS0tKNjY0sLCy2trY4ODgfHx98fHwYGBgyMjIqKiqQkJBfX1/ExMSGhoYaGhqZmZmrZPAWAAAIfklEQVR4nO2daVvyOhCGLS1lkX1RWVTkRQH9///vsAmlTWbSzkzidZ25v4pNny6T2ZI+PCiKoiiKoiiKoiiKoiiKoiiKoiiKoih8zBYv+8muMU6TJDqSJOm4sRvut4tZ6FOjs6n9LNNmZKOZNjq1TeiTrMx88J7EVnE34mQyCH2uFVgMUwdxN9LpKvQpl+Fx2C0l70x3ugh94m7M9+XuXpbeYB769FE+311ePTvN94/QEkBGDZK8M42n0DKsjJYM+o4sR6GlGFlw6TvS+HtGZ95i1Hfk/Y/ZnA6zvgPtr9CiMoyqTH846WNoYb9MRPQdmYSWdmKUiAk8hCF/wOL8COo70gmsbzYWFniYHIMa1RHNRXOjGfBJffWg70iw8FHOhuYZhhHI6aVhNALom1ePAqsw9i7w06/Ag4PjOW58k5zmLRK9zhof/gVGUdejwG8ZTxuV6O8u9oIIPLg3vgT6nCbu8TRpvAcT6CmcEgjnS7CXF1gLKjCKttICP31EExDNf8IKw8wTWXqyAofmUZu7YSvl9AK6y+GwYXlc+pICbS/h8/GP81GlklOR8f4c804tf5fMiNtu0/UHT+TEcHN6rQl/WH6SyAm0nX4r+6MO5WntPWcPZfOd3qUEvtjO6/n+d+uqXt0yNxVY83hS1SnrzfksXIsqGnuFqW5h+6nQc2qxo2b7vc4bwnbaaE0mwyOTSatRCKDjdfEgc+s1/ZEQWLde/Jbx97/ua5JOvmpvhh9sap3JtROlZYyMrD5+W6JFxV7efTX/wyiJursB8srMnwa7bpRYfDHrY2O5qiS21sGiF9vZ1x2PXbeFtmv7oPx1KSDzJDcDW623gPP2bB8rdr1V5RnZR2UPMgB/LF4xj3WjDkQyzDcRuIVR02QoeYAUWl//akAzuOBTap3yj7DmpQBDGkmYNbdxOX03uNWJ93HJAqdMGOfEGTiQYHkPyXrxJTT68EA7toHyIG1yfDV+exvzCbnMCZIzYAsxAM/ijFSntt3Zv8Bla9DMxJRpoDxoGZ0r2EceUrmKCdrKwvSYolnuRMqp2aDXlmeiQh9SuRkf8rxPsFRq7KmEC5LFEqwMxFIXfkQGka3pYa8ih0+MteZ9M4xhB3GnbBmUUiAVX+lOXuQCczxB8AjyDRKwGWjSB0D8Co6nBAYxNvQFfl/SlxDjA67J0i05PBv6aBqEOyPoMyLs3vtoboUDfXpgAx5esJKXAXxM29Sjw4ZGrJB3B/yiUE0NkFc/UGNREPYc4FZuP2uxN+A5UI2pvfoT+XoNHx7a0ElQw+8ddHBfrcmg+021BeBk4au/HEy5UacLUKGvhVegQqpnDPq9ot1JGcB8LVHhP1Chr1VXoMKE1hu9Av0JQ/uECLBCWm6/DhpqX+tYQYXE8iVYovT2Htpa+E60aakaWKFUrjsPGD8RC7SwQj+ONzJbiCqUK6vdE06hrxUeYLqP+h6CtlS45foK6FgRm13ge+grtoBPgjYffsPZSj9rAuG8d0JLusNem2DVKQuciqJ63nCqzY9TA074wgoFujwNwJmolHh0uC7jx9TAlWDqpIwsxZMtrZ1ZwadATbsjdREPi+WwnRuotaE9fHgfmRqkDPyMHwHkCT58LJ8xnSHrAcl1bvjwHjblQJ6iCD8CAtLSIp8yRR5SujkHU8KRfH0NawWhT8lI56X4pI/1K9HXB8FO4QG5PvYjb9jwDK4xNoTsTURbzhjGQBfaSQYYyGTFY+nQJk/JSB/dBYejVQLtEJZZDHgCrF6e4FhzhfkUkdw+B/j+DcQA/4LDViYrjnEKoC8hl1/ssCubyKZxC7RDmKs2tAIziheJ/Guftg47cMRMk7HTwmzupUFwi8kFrpQ05t2f4S3TuG3zw1bAdBotGvNN/S+O+zKwDYjFF78wdS68ue4KzucwYhHMjSl9w7E3932oGM1b3nnq9fedljGVGg9XpJEWJfbZ4oy+c7bmUhmtG52qdqN6bmhQaktbag7qjvs3/3rxPsxvaNyqYOTmr7ZNhSzwpqNzawJuLQo1m+PR3e2fHOfj+Wb0s3NwYHIwN9HnTuAmcQYFON3xrg/PIdvhblxtyx7uikJ+YcfyeuJzuHjTgzOqm8o7ErGvgyg4p1cfBqyiohXaTcUN4PjXQRRdt+v8DkU5eIQKbdcAINBxVnwYrxkEeyjuUvqqtJWmROrEEHBfr6P1SXOxpuDWEDZE0goGb/F3Ebct3eAWglfYuV4mhWlIzl6fFYuv5eZ1lN/aPRaqzBoWeV1NtvE+OIbg6LL7AmKF2WKw37xeTNPE72oOym63KFfwMmRsbrlSw2vq+raUtKZxYQc8PoqTYsZ3+ipYVFfnH6tv5RCtyhavdmbmnd0VAJavzhXwQSmBwj2fhRDg/p14njR6vV1r2Cm1J0cpt0a6h6fooTEkg0vtviy+qLMweTEk1sso9PC9kkLNkp4LLqHQy0Kk/ORO36/NXaGnvut8PNij7kjlrNDXByBWeYOarGgHdFUouLtfjmK8Q3MUHRUKFLisFJPgKWXBsaNCr5/SMyQu0mnBqLqm+N0Uev48qXF/o2bSGHZeX468/kzStut9dVLo/dukDkV256XyDgpDfHytYFElFSZBPk++QQNXNoVpoM/Mz7HIlUthiK+uXUA6wpgU+lqqamQNdqKwKIxZy4TlqUOlJw6FPY+OjAXgSWVQGOjbjvdsrbUnssLuX/nMuu02UhX+iRt45sn8NtIU9v7A144zrE0eDkVhEtiEGugXNVZX2JTrOyYw6+cnR9fbkFfY7gfy0lDm/ZhBYfwT9DvVGPusO+5qKjaZm58G+4CzM9vW7410d5h/c7DNlvjH/1iYDU5BR5nc5vkf1p6/+Uvi8bGcsZg9es0zKYqiKIqiKIqiKIqiKIqiKIqiKIryv+Q/6LhtcJ4pnMIAAAAASUVORK5CYII="
            alt="github"
          />
        </a>
        <a
          onClick={() =>
            props.Event("Contact Section", "EmailMe Clicked", "CONTACT_SECTION")
          }
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:roebrtbalonek@gmail.com?"
        >
          <img
            className="contact__button"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHsyZ2dWlpBwo0rcs84CH7E_9NK9QamE-i8Q&usqp=CAU"
            alt="contact"
          />
        </a>
        <a
          onClick={() =>
            props.Event(
              "Contact Section",
              "LinkedIn Clicked",
              "CONTACT_SECTION"
            )
          }
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/robertbalonek/"
        >
          <img
            className="contact__button"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1654901074/768px-LinkedIn_logo_initials_lzicdo.png"
            alt="Linkedin"
          />
        </a>
        <a
          onClick={() =>
            props.Event("Contact Section", "Upwork Clicked", "CONTACT_SECTION")
          }
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.upwork.com/freelancers/~01cb3c6aad79dd9911"
        >
          <img
            className="contact__button less"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1633820638/Portfolio%20Pics/Logos/Upwork_uzw8jv.png"
            alt="upwork"
          />
        </a>
      </div>
      <div className="mobileNavBox">
        <a className="box-div" href="/#">
          <div>
            <p className="box-div__text">Top</p>
          </div>
        </a>
        <a className="box-div" href="#skills">
          <div>
            <p className="box-div__text">Skills</p>
          </div>
        </a>
        <a className="box-div" href="#projects">
          <div>
            <p className="box-div__text">Projects</p>
          </div>
        </a>
        <a className="box-div" href="#about">
          <div>
            <p className="box-div__text">About</p>
          </div>
        </a>
      </div>
    </div>
  );
}
