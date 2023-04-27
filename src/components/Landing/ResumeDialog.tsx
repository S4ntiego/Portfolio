"use client";
import React from "react";
import Image from "next/image";
import styles from "./Landing.module.scss";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";

export function ResumeDialog() {
  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer" asChild>
        <div className={styles.cvIconContainer}>
          <Image
            src={`/icons/cv.svg`}
            fill
            className={styles.cvIcon}
            alt={"cv"}
          />
        </div>
      </DialogTrigger>
      <DialogContent className="flex justify-center items-center flex-col w-full">
        <iframe
          src="/Adam-Ksiazek-CV.pdf"
          width="800px"
          height="700px"
        ></iframe>
        <DialogFooter>
          <button type="submit">Save changes</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ResumeDialog;
