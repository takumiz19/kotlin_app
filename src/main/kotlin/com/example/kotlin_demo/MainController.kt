package com.example.kotlin_demo

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.*

@Controller
@RequestMapping("/")
class MainController {

    @GetMapping("/top")
    @ResponseBody
    fun top():String{
        return "おはよー"
    }
}