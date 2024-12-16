import Image from "next/image";
import Link from "next/link";
import { dayjsExtended } from "lib/dayjs";
import { Tables } from "lib/types.database";
import classes from "components/Clip/Clip.module.scss";

export default function Clip({ clip }: {
  clip: Tables<"clips">;
}) {
  return (
    <div className={classes.wrapper}>
      <div className={classes["clip-thumbnail"]}>
        <Link href={clip.url}>
          <Image
            src={clip.thumbnail_url}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            width={480}
            height={272}
            alt={clip.title}
            unoptimized
          />
        </Link>
        <div className={classes["clip-data"]}>
          <div className={`${classes["clip-data-fields"]} ${classes["clip-data-duration"]}`}>
            {`${clip.duration}s`}
          </div>
          <div className={`${classes["clip-data-fields"]} ${classes["clip-data-views"]}`}>
            {`${clip.view_count} views`}
          </div>
          <div className={`${classes["clip-data-fields"]} ${classes["clip-data-date"]}`}>
            {dayjsExtended(clip.created_at).toString().substring(0, 22)}
          </div>
        </div>
      </div>
      <div className={classes["clip-label"]}>
        <Link href={clip.url} className={classes["clip-label-link"]}>
            {clip.title}
        </Link>
      </div>
    </div>
  );
}