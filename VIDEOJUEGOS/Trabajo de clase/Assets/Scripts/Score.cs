using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class Score : MonoBehaviour
{
    public TMP_Text scoreText;
    public ParticleSystem particles;

    int points;

    // Start is called before the first frame update
    void Start()
    {
        points = 0;
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void OnTriggerEnter2D(Collider2D col)
    {
        points += 1;
        scoreText.text = "Score: " + points;
        particles.Emit(20);
        //Instantiate(particles, transform.position, Quaternion.identity);
    }
}
