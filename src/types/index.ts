// React
import { ReactNode } from "react";

export type ImageProps = {
  isStatic?: boolean;
  loaded: boolean;
  src: string;
};

export type TabPanelProps = {
  children?: ReactNode;
  index: number;
  value: number;
};

export type IconTextProps = {
  text: string;
  icon: string;
  fontSize?: number;
};

export type RatingProps = {
  name: string;
  rate: number;
};

export type ScoreProps = {
  score: number;
  reviews?: number;
};

export type Review = {
  title: string;
  user: string;
  message: string;
  points: string[];
  score: number;
  date: number;
}[];

export type ReviewProps = {
  reviews: Review;
};

export type ChildrenNode = {
  [key: string]: ReactNode;
};
