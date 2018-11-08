package com.example.kotlin_demo

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.*

@Controller
class MainController {

    @GetMapping("/top")
    fun top():String{
        return "/top.html"
    }
}