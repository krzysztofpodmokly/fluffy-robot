'use client';

import React from "react"
import useBearStore from '@/store';
import { IFormState, ResumeProps } from "@/app/types";

import Resume from "./Resume";

const ResumeWrapper = ({ format, isPreview }: ResumeProps) => {
  const formData = useBearStore((state: IFormState) => state.formData);

  return (
    <Resume format={format} isPreview={isPreview} data={formData} />
  )
};

export default ResumeWrapper;
