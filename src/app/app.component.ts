import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'image-gallery';

  categories = [
    {
      id: '1',
      name: 'branding'
    },
    {
      id: '2',
      name: 'photography'
    },
    {
      id: '3',
      name: 'logos'
    },
    {
      id: '4',
      name: 'graphics'
    },
  ];

  categoriesData = [
    {
      id: '1',
      img: '../assets/img/portfolio-207.jpg',
      tags: ['tag 01', 'tag 02', 'tag 03'],
      disc: 'description 01 .......',
      author: 'Mohamed',
      date: '4/8/2023',
      category: 'branding'
    },
    {
      id: '2',
      img: '../assets/img/portfolio-208.jpg',
      tags: ['Biolator', 'Series'],
      disc: 'description 02 .....',
      author: 'Ahmed',
      date: '5/6/2023',
      category: 'branding'
    },
    {
      id: '3',
      img: '../assets/img/portfolio-209.jpg',
      tags: ['Potato', 'Oslands'],
      disc: 'description 03 ......',
      author: 'ALi',
      date: '4/2/2023',
      category: 'branding'
    },
    {
      id: '4',
      img: '../assets/img/portfolio-40-2.jpg',
      tags: ['Daimler', 'Financial'],
      disc: 'description 04 ........',
      author: 'Alaa',
      date: '2/5/2023',
      category: 'photography'
    },
    {
      id: '5',
      img: '../assets/img/portfolio-44-2.jpg',
      tags: ['The Aparthotel'],
      disc: 'description 05 ......',
      author: 'Ibrahim',
      date: '9/8/2021',
      category: 'photography'
    },
    {
      id: '6',
      img: '../assets/img/portfolio-46.jpg',
      tags: ['Skoda', 'Corporate'],
      disc: 'description 06 .......',
      author: 'Shawky',
      date: '1/8/2025',
      category: 'photography'
    },
    {
      id: '7',
      img: '../assets/img/portfolio-47-1.jpg',
      tags: ['Jeremy', 'Dupont'],
      disc: 'description 07 .......',
      author: 'Mete3eb',
      date: '5/1/2025',
      category: 'logos'
    },
    {
      id: '8',
      img: '../assets/img/portfolio-48-1.jpg',
      tags: ['Bill', 'Gardner'],
      disc: 'description 08 .......',
      author: 'Nada',
      date: '1/10/2022',
      category: 'logos'
    },
    {
      id: '9',
      img: '../assets/img/portfolio-49-1.jpg',
      tags: ['Cortifiel', 'Look'],
      disc: 'description 09 .......',
      author: 'mohamed',
      date: '1/10/2022',
      category: 'logos'
    },
    {
      id: '10',
      img: '../assets/img/portfolio-50.jpg',
      tags: ['Armchair', 'Mojo', ''],
      disc: 'description 10 ......',
      author: 'mohamed',
      date: '1/10/2022',
      category: 'graphics'
    },
    {
      id: '11',
      img: '../assets/img/portfolio-51.jpg',
      tags: ['Truenorth', 'Web'],
      disc: 'description 11 .......',
      author: 'mohamed',
      date: '3/5/2023',
      category: 'graphics'
    },
    {
      id: '12',
      img: '../assets/img/portfolio-43-1.jpg',
      tags: ['Mass', 'Productions'],
      disc: 'description 12 .....',
      author: 'mohamed',
      date: '1/10/2022',
      category: 'graphics'
    },
  ]

  filteredCategories = this.categoriesData



  constructor() { }

  filterCards(name: any) {

    console.log(name);

    if (name == null) {
      this.filteredCategories = this.categoriesData
    }
    else {
      this.filteredCategories = this.categoriesData.filter(p => p.category.includes(name))
    }



    console.log(this.filteredCategories);
  }

  ngOnInit(): void {
  }

}
