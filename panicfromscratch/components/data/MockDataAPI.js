import { Text } from 'react-native';
import React, { Component } from 'react';
import { activitys, tribes, ingredients } from './dataArrays';

export function getTribeById(tribeId) {
  let tribe;
  tribes.map(data => {
    if (data.id == tribeId) {
      tribe = data;
    }
  });
  return tribe;
}

export function getIngredientName(ingredientID) {
  let name;
  ingredients.map(data => {
    if (data.ingredientId == ingredientID) {
      name = data.name;
    }
  });
  return name;
}

export function getIngredientUrl(ingredientID) {
  let url;
  ingredients.map(data => {
    if (data.ingredientId == ingredientID) {
      url = data.photo_url;
    }
  });
  return url;
}

export function getTribeName(tribeId) {
  let name;
  tribes.map(data => {
    if (data.id == tribeId) {
      name = data.name;
    }
  });
  return name;
}

export function getActivitys(tribeId) {
  const activitysArray = [];
  activitys.map(data => {
    if (data.tribeId == tribeId) {
      activitysArray.push(data);
    }
  });
  return activitysArray;
}

// modifica
export function getActivitysByIngredient(ingredientId) {
  const activitysArray = [];
  activitys.map(data => {
    data.ingredients.map(index => {
      if (index[0] == ingredientId) {
        activitysArray.push(data);
      }
    });
  });
  return activitysArray;
}

export function getNumberOfActivities(tribeId) {
  let count = 0;
  activitys.map(data => {
    if (data.tribeId == tribeId) {
      count++;
    }
  });
  return count;
}

export function getAllIngredients(idArray) {
  const ingredientsArray = [];
  idArray.map(index => {
    ingredients.map(data => {
      if (data.ingredientId == index[0]) {
        ingredientsArray.push([data, index[1]]);
      }
    });
  });
  return ingredientsArray;
}

// functions for search
export function getActivitysByIngredientName(ingredientName) {
  const nameUpper = ingredientName.toUpperCase();
  const activitysArray = [];
  ingredients.map(data => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      // data.name.yoUpperCase() == nameUpper
      const activitys = getActivitysByIngredient(data.ingredientId);
      const unique = [...new Set(activitys)];
      unique.map(item => {
        activitysArray.push(item);
      });
    }
  });
  const uniqueArray = [...new Set(activitysArray)];
  return uniqueArray;
}

export function getActivitysBytribeName(tribeName) {
  const nameUpper = tribeName.toUpperCase();
  const activitysArray = [];
  tribes.map(data => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      const activitys = getActivitys(data.id); // return a vector of activitys
      activitys.map(item => {
        activitysArray.push(item);
      });
    }
  });
  return activitysArray;
}

export function getActivitysByActivityName(activityName) {
  const nameUpper = activityName.toUpperCase();
  const activitysArray = [];
  activitys.map(data => {
    if (data.title.toUpperCase().includes(nameUpper)) {
      activitysArray.push(data);
    }
  });
  return activitysArray;
}
