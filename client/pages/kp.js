import Link from "next/link";
import React from "react";

export default function Page() {
  return <div>
    <div>
        Hello on /kp page!
    </div>
    <div>
        Go <Link href="/">back!</Link>
    </div>
  </div>;
}
