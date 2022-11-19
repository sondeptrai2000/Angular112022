import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

export class userModel {
  constructor(public userName: string = '', public password: string = '') {}
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MessageService],
})
export class HomeComponent implements OnInit {
  // https://stackoverflow.com/questions/70745101/angular-13-ngform-viewchild-issue
  @ViewChild('heroForm', { read: NgForm }) form!: NgForm;

  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  loadding: boolean = true;
  user = new userModel();

  ngOnInit(): void {
    this.loadding = false;
  }

  login(): void {
    debugger;

    if (this.form.invalid) {
      for (let i in this.form.controls) this.form.controls[i].markAsTouched();
      this.showSingleToast(
        'error',
        '',
        'Vui lòng nhập đầy đủ thông tin tài khoản, mật khẩu!'
      );
      return;
    }

    this.showSingleToast('success', '', 'Đăng nhập thành công!');
    this.router.navigate(['/data-configure/users']);
  }

  signUp(): void {
    debugger;
    console.log('signUp');
  }

  showSingleToast(severity: string, summary: string, detail: string): void {
    this.messageService.add({
      severity: severity,
      summary: summary,
      detail: detail,
    });
  }
}
