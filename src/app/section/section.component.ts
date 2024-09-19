import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private Router:Router
  ) { }

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      // alert(fragment);
      if (fragment) {
        const element = document.getElementById(fragment)

        if (element) {
          //smooth,auto,instant
          element.scrollIntoView({ behavior:'smooth' })
        }
      }
    })

  }
  backToHome(){
    this.Router.navigate(['/navigate'],{fragment:'back'})
  }

}
